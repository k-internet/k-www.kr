import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.value }}>
      </div>
    );
  }
}

export default Description;