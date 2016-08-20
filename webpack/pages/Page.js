import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Article, Firstpage, List, ArticleLists, ListLists } from '../components';
import { browserHistory } from 'react-router';
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
          } else {
            nextProps.dispatch(updateArticlePermalink(nextProps.params.permalink));

            this.setState({
              article: pageResponse.data.article
            });

          }
        }


      })
      .catch(error => {
        console.error(error);
      });

    if (!_.isUndefined(nextProps.currentListPermalink) && !_.isNull(nextProps.currentListPermalink)) {
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
      .catch(error => {
        console.error(error);
      });

  }

  render() {
    // console.log("page rerender");
    return (
      <div>

        <ArticleLists />
        <ListLists />

        {
          !_.isNull(this.state.article) ? 
          <Article {...this.state.article} /> :
          <Firstpage />
        }
        
        <List  {...this.state.list} />
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