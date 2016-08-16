import React, { Component } from 'react';
import { Firstpage, List } from '../components';

class Welcome extends Component {
  render() {
    return (
      <div>
        <Firstpage />
        <List />
        <br className="clearing" />
      </div>
    );
  }
}

export default Welcome;