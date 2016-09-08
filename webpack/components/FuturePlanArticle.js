import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { ReactMultilingual } from './'; 
import _ from 'lodash';
import { isPresent } from '../utils';
import { browserHistory } from 'react-router';
import { updateListPermalink,  updateActivePage } from '../actions';
import 'gsap';
import $ from 'jquery';

class FuturePlanArticle extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.refreshInitList(this.props);
    this.addEvent();
  }

  componentWillUnmount(){
    $(this.refSection).off('click');
  }

  addEvent(){ 
    $(this.refSection).on('click', 'a', e => {
      if ($(e.currentTarget).hasClass('list-link')) {
        e.preventDefault();
        // this.props.dispatch(updateListPermalink(e.currentTarget.dataset.permalink));

        const path = `/${this.props.locale}/articles/${this.props.currentArticlePermalink}/lists/${e.currentTarget.dataset.permalink}`;

        browserHistory.push(path);

      } else if ($(e.currentTarget).hasClass("sub") || e.currentTarget.id.indexOf("fn-") > -1){
        e.preventDefault();
        var scrollTop = document.getElementById(e.currentTarget.href.split("#")[1]).offsetTop;
        TweenMax.to(this.refSection, 1, { ease: Power3.easeInOut, scrollTop: scrollTop - 200 });
      } 

    });
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
         const path = `/${this.props.locale}/articles/${this.props.currentArticlePermalink}/lists/${props.init_list_permalink}`;

        browserHistory.push(path);

    }
  }
  handleClick(e){
    this.props.dispatch(updateActivePage(e));
  }



  render() {
    return (
      <section 
        className={`article article--future-plan${this.props.active ? " active" : ""}`} 
        ref={ c => { this.refSection = c; } } 
        style={{ height: this.props.screenHeight, backgroundColor: this.props.background_color }}
        onClick={!this.props.active ? this.handleClick.bind(this, "article") : null}
        >
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
        
        
        <div className="wrapper">
          <ReactMultilingual configuration={["ko", "en", "punct", "num"]} isRawHTML={true}>
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
    locale: state.locale,
    currentArticlePermalink: state.currentArticlePermalink,
    active: state.active == "article"
  }
};

export default connect(mapStateToProps)(FuturePlanArticle);