import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Multilingual } from './'; 
import _ from 'lodash';
import { updateListPermalink } from '../actions';
import 'gsap';
import $ from 'jquery';

class Article extends Component {
  constructor(props){
    super(props);

    // this.handleScroll = this.handleScroll.bind(this);
    // this.prevScrollTop = 0;
  }

  componentDidMount(){
    this.refreshInitList(this.props);
    

    $(document).on('click', 'a.list-link', event => {
      event.preventDefault();
      this.props.dispatch(updateListPermalink(event.target.dataset.permalink));
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
    if (!_.isUndefined(props.scroll_pos_list) && !_.isNull(props.scroll_pos_list)){
      if (!_.isUndefined(props.scroll_pos_list.scroll)) {
        if (props.scroll_pos_list.scroll.length > 0) {
          props.dispatch(updateListPermalink(props.scroll_pos_list.scroll[0].listPermalink));
        }
      }
    }
  }


  componentDidUpdate(){

  }

  render() {
    return (
      <section className="article" ref={ c => { this.refSection = c; } } style={{ height: this.props.screenHeight, backgroundColor: this.props.background_color }}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
        
        
        <div className="wrapper">
          <h1 className="article__title--ko" style={{ color: this.props.color }}>  
            { this.props.title_ko }
          </h1>
          <h1 className="article__title--en" style={{ color: this.props.color }}>
            { this.props.title_en }
          </h1>
          <br className="clearing" />

          <div className="article__author">
            <h2 className="article__title--ko" style={{ color: this.props.color }}>  
              { this.props.author_ko }
            </h2>
            <h2 className="article__title--en" style={{ color: this.props.color }}>
              { this.props.author_en }
            </h2>
            <br className="clearing" />
          </div>

          <Multilingual value={this.props.description_ko} />
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