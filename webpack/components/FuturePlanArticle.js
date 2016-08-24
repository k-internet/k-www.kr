import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { ReactMultilingual } from './'; 
import _ from 'lodash';
import { isPresent } from '../utils';
import { updateListPermalink } from '../actions';
import 'gsap';
import $ from 'jquery';

class FuturePlanArticle extends Component {
  constructor(props){
    super(props);

    // this.handleScroll = this.handleScroll.bind(this);
    // this.prevScrollTop = 0;
  }

  componentDidMount(){
    this.refreshInitList(this.props);
    

    $(document).on('click', 'a.list-link', event => {
      event.preventDefault();
      this.props.dispatch(updateListPermalink(event.currentTarget.dataset.permalink));
    });

    // this.refSection.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    // this.refSection.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps){
    
    if (newProps.permalink != this.props.permalink) {
      this.refreshInitList(newProps);
      TweenMax.to(this.refSection, 1, { ease: Power3.easeInOut, 
        scrollTop: 0
      });
    }
    
  }


  refreshInitList(props){
    if (isPresent(props.init_list_permalink)){
      props.dispatch(updateListPermalink(props.init_list_permalink));
    }
  }


  componentDidUpdate(){

  }

  render() {
    return (
      <section className="article article--future-plan" ref={ c => { this.refSection = c; } } style={{ height: this.props.screenHeight, backgroundColor: this.props.background_color }}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
        
        
        <div className="wrapper">
          <ReactMultilingual configuration={["ko", "en", "punct", "num"]} isRawHTML={true}>
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
    screenHeight: state.screenHeight
  }
};

export default connect(mapStateToProps)(FuturePlanArticle);