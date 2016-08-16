import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    return (
      <section className="list">
        list
      </section>
    );
  }
}

export default connect()(List);