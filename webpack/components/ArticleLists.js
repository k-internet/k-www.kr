import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { updateArticlePermalink, updateLocale } from '../actions';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { isPresent, customRouter } from '../utils';
import { ReactMultilingual } from './';

class ArticleLists extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: []
    };
  }

  handleChange(e){


    const path = isPresent(this.props.currentListPermalink) ? 
                `/${this.props.locale}/articles/${e.value}/lists/${this.props.currentListPermalink}` :  
                `/${this.props.locale}/articles/${e.value}`;

    browserHistory.push(path);

    
  }

  componentWillReceiveProps(nextProps){


    let options = _.map(nextProps.articleLists, list => {
      return {
        value: list.permalink,
        label: `${list['title_' + nextProps.locale]} ${isPresent(list['author_' + nextProps.locale]) ? " / " + list['author_' + nextProps.locale] : ""}`
      };
    });


    this.setState({
      options: options
    });

  }

  handleHomeClick(e){
    e.preventDefault();
    browserHistory.push(`/${this.props.locale}`);
    this.props.dispatch(updateArticlePermalink('/'));

  }

  handleLocaleClick(locale){
    this.props.dispatch(updateLocale(locale));

    browserHistory.push(document.location.pathname == "/" ?  
      `/${locale}` :
      document.location.pathname.replace(/\/en|\/ko/, `/${locale}`));
  }

  render() {

    let colorByPage = (this.props.currentArticlePermalink == '/' || 
                       document.location.pathname == '/' || 
                       this.props.currentArticlePermalink.indexOf('future-plan') > -1) ? 'white' : 'black';
    // 초초슈퍼레거시코드
    
    return (
      this.state.options.length > 0 ? 
      <div className={`article-lists${this.props.active ? " active" : ""}`}>
        <a href="/" onClick={this.handleHomeClick.bind(this)} className="article-lists__home-btn">
          <img src="/assets/mcskw_trans.gif" alt="KTIG" width="25"/>
        </a>
        <div className={`article-lists__indic ${colorByPage} ${this.props.locale}`}>
          { 
            this.props.locale == "ko" ? 
            <span className="ml-ko">글</span> : 
            <span className="ml-en">Writing</span>  
          }
        </div>

        <div className="article-lists__list">
          <Select options={this.state.options} onChange={this.handleChange} searchable={false} value={this.props.currentArticlePermalink} placeholder={this.props.locale == "ko" ? "글을 선택해 주세요" : "Please select a writing"}/>
        </div>
        <ReactMultilingual isRawHTML={false} configuration={["en", "ko"]}>
          <div className={`article-lists__toggle-locale ${colorByPage}`}>
            <a href="javascript:void(0);" onClick={this.handleLocaleClick.bind(this, "ko")} className={this.props.locale == "ko" ? "selected" : null}>한</a>&nbsp;&nbsp;
            <a href="javascript:void(0);" onClick={this.handleLocaleClick.bind(this, "en")} className={this.props.locale == "en" ? "selected" : null}>EN</a>
          </div>
        </ReactMultilingual>

      </div>
      : null
    );
  }
}

let mapStateToProps = state => {
  return {
    articleLists: state.dropdownLists.articles,
    currentArticlePermalink: state.currentArticlePermalink,
    currentListPermalink: state.currentListPermalink,
    locale: state.locale,
    active: state.active == "article"
  };
};
export default connect(mapStateToProps)(ArticleLists);