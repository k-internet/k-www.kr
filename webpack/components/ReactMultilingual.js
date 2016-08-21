import React, { Component } from 'react';
import Multilingual from 'multilingual.js';

class ReactMultilingual extends Component {
  componentDidMount(){
    this.createMarkup();
  }

  componentDidUpdate(){
    this.createMarkup();
  }

  createMarkup(){
    // debugger;
    var multilingual = new Multilingual({
      containers: [this.refContainer], 
      configuration: this.props.configuration
    });

    // debugger;
  }

  render() {
    return (
      <div ref={ c => {this.refContainer = c; }} dangerouslySetInnerHTML={ this.props.isRawHTML ? {__html: this.props.children } : null }>
        {
          this.props.isRawHTML ? null : this.props.children
        }
      </div>
    );
  }
}

export default ReactMultilingual;