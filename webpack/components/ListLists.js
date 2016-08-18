import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { browserHistory } from 'react-router';
import { updateListPermalink } from '../actions';
import _ from 'lodash';

class ListLists extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: []
    };
  }

  handleChange(e){
    
    const path = `/lists/${e.value}`;
    browserHistory.push(path);
    this.props.dispatch(updateListPermalink(e.value));
    
  }

  componentWillReceiveProps(nextProps){
    let options = _.map(nextProps.listLists, list => {
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
        <div className="list-lists">
          <Select options={this.state.options} onChange={this.handleChange} value={this.props.currentListPermalink} />
        </div>
      : null
    );
  }
}

let mapStateToProps = state => {
  return {
    listLists: state.dropdownLists.lists,
    currentListPermalink: state.currentListPermalink
  };
};
export default connect(mapStateToProps)(ListLists);