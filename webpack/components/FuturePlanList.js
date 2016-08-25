import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Description } from './'; 
import 'gsap';
import { ReactMultilingual } from './'; 

class FuturePlanList extends Component {

  componentDidUpdate(){
    TweenMax.to(this.refSection, 1, { ease: Power3.easeInOut, 
      scrollTop: 0
    });
  }

  render() {
    return (
      <section ref={ c => { this.refSection = c; }} className="list" style={{ height: this.props.screenHeight}}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
       
        
        <div className="wrapper">
          <ReactMultilingual isRawHTML={true} configuration={["ko", "en", "num", "punct"]}>
            { this.props[`description_${this.props.locale}`] }
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
    locale: state.locale
  }
};

export default connect(mapStateToProps)(FuturePlanList);