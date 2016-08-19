import React, { Component } from 'react';
import { Firstpage, List, ListLists, ArticleLists } from '../components';
import axios from 'axios';
import { updateDropdownData, updateListPermalink } from '../actions'; 
import { connect } from 'react-redux';

class Welcome extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      list: null
    };

  }

  componentDidMount(){
    this.loadData();
  }

  loadData(){
    axios.get('/api/welcome.json').then(response => {
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

export default connect()(Welcome);