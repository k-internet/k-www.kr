import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { updateArticlePermalink } from '../actions';
import { browserHistory } from 'react-router';
import _ from 'lodash';

class ArticleLists extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: []
    };
  }

  handleChange(e){
    const path = `/articles/${e.value}`;
    browserHistory.push(path);
    this.props.dispatch(updateArticlePermalink(e.value));

  }

  componentWillReceiveProps(nextProps){
    let options = _.map(nextProps.articleLists, list => {
      return {
        value: list.permalink,
        label: list.title_ko
      };
    });

    this.setState({
      options: options
    });

  }

  render() {
    return (
      this.state.options.length > 0 ? 
      <div className="article-lists">
        <Select options={this.state.options} onChange={this.handleChange} value={this.props.currentArticlePermalink} />
      </div>
      : null
    );
  }
}

let mapStateToProps = state => {
  return {
    articleLists: state.dropdownLists.articles,
    currentArticlePermalink: state.currentArticlePermalink
  };
};
export default connect(mapStateToProps)(ArticleLists);