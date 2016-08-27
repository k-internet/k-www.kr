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
    axios.get(`/api/${nextProps.params.listOrArticle}/${nextProps.params.permalink}.json`)
      .then(pageResponse => {
        
        if (!_.isUndefined(nextProps.params.listOrArticle)){
          if (nextProps.params.listOrArticle == "lists") {
            nextProps.dispatch(updateListPermalink(nextProps.params.permalink));
            
            this.setState({
              list: pageResponse.data.list
            });

            document.title = `${pageResponse.data.list.title_ko} / ${pageResponse.data.list.title_en} :: 한국 인터넷 관광 안내서 / Korea Internet Tour Guide`;

          } else {
            nextProps.dispatch(updateArticlePermalink(nextProps.params.permalink));

            this.setState({
              article: pageResponse.data.article
            });

            document.title = `${pageResponse.data.article.title_ko} / ${pageResponse.data.article.title_en} :: 한국 인터넷 관광 안내서 / Korea Internet Tour Guide`;

          }
        }


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


        })
        .catch(error => {
          console.error(error);
        });
    }



  }

  loadData(){

    axios.all([axios.get('/api/welcome.json'), axios.get(`/api/${this.props.params.listOrArticle}/${this.props.params.permalink}.json`) ])
      .then(axios.spread((welcomeResponse, pageResponse) => {
        this.props.dispatch(updateDropdownData(welcomeResponse.data.articles, welcomeResponse.data.lists));
        
        if (!_.isUndefined(this.props.params.listOrArticle)){
          if (this.props.params.listOrArticle == "lists") {
            this.props.dispatch(updateListPermalink(this.props.params.permalink));
            
            this.setState({
              list: pageResponse.data.list
            });
          } else {
            this.props.dispatch(updateArticlePermalink(this.props.params.permalink));

            this.setState({
              article: pageResponse.data.article
            });

          }
        }


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
    } else if (!_.isNull(this.state.article.react_classname) && !_.isUndefined(this.state.article.react_classname)){
      if (this.state.article.react_classname.length > 0) {
        var CustomComponent = customRouter[this.state.article.react_classname];
        return (<CustomComponent {...this.state.article} />);
      } 
    } 
    
    return (<Article {...this.state.article} />);    
  }

  configureListSection(){
    if (isPresent(this.state.list)){
      if (!_.isNull(this.state.list.react_classname) && !_.isUndefined(this.state.list.react_classname)){
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