import React, { Component } from 'react';
import { Firstpage, List, ListLists, ArticleLists } from '../components';
import axios from 'axios';
import { updateDropdownData, updateListPermalink, updateLocale } from '../actions'; 
import { connect } from 'react-redux';
import { isPresent } from '../utils';

class Welcome extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      list: null
    };

  }

  componentDidMount(){

    document.title = `한국 인터넷 관광 안내서 / Korean Internet Tour Guide`;
    if (isPresent(this.props.params.locale)) {
      this.props.dispatch(updateLocale(this.props.params.locale));
    }
    
    this.loadData();
  }

  componentWillReceiveProps(nextProps){

    document.title = `한국 인터넷 관광 안내서 / Korean Internet Tour Guide`;

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
    axios.get(`/api/welcome.json?locale=${this.props.locale}`).then(response => {
      this.props.dispatch(updateDropdownData(response.data.articles, response.data.lists));
      this.props.dispatch(updateListPermalink(response.data.random_list.permalink));
      
      this.setState({
        list: response.data.random_list
      });

    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div>

        <ArticleLists />
        <ListLists />

        <Firstpage />
        <List {...this.state.list} />
        <br className="clearing" />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    currentListPermalink: state.currentListPermalink,
    locale: state.locale
  };
};

export default connect(mapStateToProps)(Welcome);