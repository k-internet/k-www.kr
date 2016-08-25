import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Description } from './'; 
import { updateActivePage } from '../actions';
import 'gsap';
import { ReactMultilingual } from './'; 

class List extends Component {


  componentWillReceiveProps(newProps){
    
    if (newProps.permalink != this.props.permalink) {
      TweenMax.to(this.refSection, 1, { ease: Power3.easeInOut, 
        scrollTop: 0
      });
    }
    
  }


  handleClick(e){
    this.props.dispatch(updateActivePage(e));
  }

  render() {
    return (
      <section ref={ c => { this.refSection = c; }} className={`list${this.props.active ? " active" : ""}`} style={{ height: this.props.screenHeight}} onClick={!this.props.active ? this.handleClick.bind(this, "list") : null}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
       
        
        <div className="wrapper">
          <ReactMultilingual isRawHTML={true} configuration={["ko", "en", "num", "punct"]}>
            { this.props.description_ko }
          </ReactMultilingual>
        </div>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>

      </section>
    );
  }
}

let mapStateToProps = state => {
  return {
    screenHeight: state.screenHeight,
    active: state.active == "list"
  }
};

export default connect(mapStateToProps)(List);