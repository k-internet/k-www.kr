import React, { Component } from 'react';

class Multilingual extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.value }}>
      </div>
    );
  }
}

export default Multilingual;