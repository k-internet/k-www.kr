import React, { Component } from 'react';
import { Article, List } from '../components';

class Page extends Component {
  render() {
    return (
      <div>
        <Article />
        <List />
        <br className="clearing" />
      </div>
    );
  }
}

export default Page;