import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Description } from './'; 

class Article extends Component {
  componentDidMount(){

  }

  componentWillReceiveProps(newProps){
    
  }

  render() {
    return (
      <section className="article" style={{ height: this.props.screenHeight, backgroundColor: this.props.backgroundColor }}>
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

export default connect(mapStateToProps)(Article);