import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Article, Firstpage, List, ArticleLists, ListLists, FuturePlanArticle, FuturePlanList  } from '../components';
import { browserHistory } from 'react-router';
import { customRouter, isPresent } from '../utils';
import { updateDropdownData, updateListPermalink, updateArticlePermalink } from '../actions';
import axios from 'axios';
import _ from 'lodash';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      list: null
    };
  }
  componentDidMount(){
    this.loadData();
  }


  componentWillReceiveProps(nextProps){
    let permalinkURL;

    if (isPresent(nextProps.params.permalink) && isPresent(nextProps.params.listPermalink)){
      permalinkURL = `/api/articles/${nextProps.params.permalink}/lists/${nextProps.params.listPermalink}.json`;
    } else if (isPresent(nextProps.params.permalink)) {
      permalinkURL = `/api/articles/${nextProps.params.permalink}.json`;
    } else if (isPresent(nextProps.params.listPermalink)) {
      permalinkURL = `/api/lists/${nextProps.params.listPermalink}.json`;
    }

    axios.get(permalinkURL)
      .then(pageResponse => {
        if (!_.isUndefined(pageResponse.data.article)) { 
          nextProps.dispatch(updateArticlePermalink(pageResponse.data.article.permalink));
          this.setState({
            article: pageResponse.data.article
          });

          document.title = `${pageResponse.data.article.title_ko} / ${pageResponse.data.article.title_en} :: 한국 인터넷 관광 안내서 / Korean Internet Tour Guide`;
        } // article 객체가 있으면 


        if (!_.isUndefined(pageResponse.data.list)) {
          nextProps.dispatch(updateListPermalink(pageResponse.data.list.permalink));
          
          this.setState({
            list: pageResponse.data.list
          });
          

          document.title = `${pageResponse.data.list.title_ko} / ${pageResponse.data.list.title_en} :: 한국 인터넷 관광 안내서 / Korean Internet Tour Guide`;
          ga('send', 'pageview');
        } // list 객체가 있으면


      })
      .catch(error => {
        console.error(error);
      });

    if (isPresent(nextProps.currentListPermalink)) {
      axios.get(`/api/lists/${nextProps.currentListPermalink}.json`)
        .then(pageResponse => {
          this.setState({
            list: pageResponse.data.list
          });
          
          ga('send', 'pageview');



        })
        .catch(error => {
          console.error(error);
        });
    }



  }

  loadData(){
    let permalinkURL;

    if (isPresent(this.props.params.permalink) && isPresent(this.props.params.listPermalink)){
      permalinkURL = `/api/articles/${this.props.params.permalink}/lists/${this.props.params.listPermalink}.json`;
    } else if (isPresent(this.props.params.permalink)) {
      permalinkURL = `/api/articles/${this.props.params.permalink}.json`;
    } else if (isPresent(this.props.params.listPermalink)) {
      permalinkURL = `/api/lists/${this.props.params.listPermalink}.json`;
    }


    axios.all([axios.get('/api/welcome.json'), axios.get(permalinkURL) ])
      .then(axios.spread((welcomeResponse, pageResponse) => {
        this.props.dispatch(updateDropdownData(welcomeResponse.data.articles, welcomeResponse.data.lists));
        
        if (!_.isUndefined(pageResponse.data.article)) { 
          this.props.dispatch(updateArticlePermalink(pageResponse.data.article.permalink));
          this.setState({
            article: pageResponse.data.article
          });

          document.title = `${pageResponse.data.article.title_ko} / ${pageResponse.data.article.title_en} :: 한국 인터넷 관광 안내서 / Korean Internet Tour Guide`;
        } // article 객체가 있으면 


        if (!_.isUndefined(pageResponse.data.list)) {
          this.props.dispatch(updateListPermalink(pageResponse.data.list.permalink));
          
          this.setState({
            list: pageResponse.data.list
          });
          

          document.title = `${pageResponse.data.list.title_ko} / ${pageResponse.data.list.title_en} :: 한국 인터넷 관광 안내서 / Korean Internet Tour Guide`;
          ga('send', 'pageview');


        } // list 객체가 있으면


      }))
      // .catch(error => {
      //   console.error(error);
      // });
    
    if (isPresent(this.props.currentListPermalink)) {
      axios.get(`/api/lists/${this.props.currentListPermalink}.json`)
        .then(pageResponse => {
          this.setState({
            list: pageResponse.data.list
          });


        })
        .catch(error => {
          console.error(error);
        });
    }

  }

  configureArticleSection(){
    if (_.isNull(this.state.article)){
      return (<Firstpage />);
    } else if (isPresent(this.state.article.react_classname)){
      if (this.state.article.react_classname.length > 0) {
        var CustomComponent = customRouter[this.state.article.react_classname];
        return (<CustomComponent {...this.state.article} />);
      } 
    } 
    
    return (<Article {...this.state.article} />);    
  }

  configureListSection(){
    if (isPresent(this.state.list)){
      if (isPresent(this.state.list.react_classname)){
        if (this.state.article.react_classname.length > 0) {
          var CustomComponent = customRouter[this.state.list.react_classname];
          return (<CustomComponent {...this.state.list} />);
        }
      } 
    } 

    return (<List  {...this.state.list} />);  
  
  }

  render() {



    return (
      <div>

        <ArticleLists />
        <ListLists />

        {
          this.configureArticleSection()
        }
        
        {
          this.configureListSection()
        }
        <br className="clearing" />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    currentListPermalink: state.currentListPermalink
  };
}

export default connect(mapStateToProps)(Page);