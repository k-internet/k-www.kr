import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Description } from './'; 
import _ from 'lodash';
import { updateListPermalink } from '../actions';
import 'gsap';

class Article extends Component {
  componentDidMount(){
    if (!_.isUndefined(this.props.scroll_pos_list) && !_.isNull(this.props.scroll_pos_list)){
      if (this.props.scroll_pos_list.length > 0) {
          this.props.dispatch(updateListPermalink(this.props.scroll_pos_list[0].listPermalink));
      }
    }
  }

  componentWillReceiveProps(newProps){
    if (!_.isUndefined(newProps.scroll_pos_list) && !_.isNull(newProps.scroll_pos_list)){

      if (newProps.scroll_pos_list.length > 0) {
        newProps.dispatch(updateListPermalink(newProps.scroll_pos_list[0].listPermalink));
      }
    }
  }

  componentDidUpdate(){
    TweenMax.to(this.refSection, 1, { ease: Power3.easeInOut, 
      scrollTop: 0
    });
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