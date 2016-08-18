import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Description } from './'; 

class List extends Component {
  render() {
    return (
      <section className="list" style={{ height: this.props.screenHeight}}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
       
        
        <div className="wrapper">
          
          <h2>
            { this.props.title_ko }
          </h2>
          <Description value={this.props.description_ko} />
        </div>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>

      </section>
    );
  }
}

let mapStateToProps = state => {
  return {
    screenHeight: state.screenHeight
  }
};

export default connect(mapStateToProps)(List);