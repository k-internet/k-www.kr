import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
  render() {
    return (
      <section className="article">
        article
      </section>
    );
  }
}

export default connect()(Article);