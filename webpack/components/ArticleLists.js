import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { updateArticlePermalink, updateLocale } from '../actions';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { isPresent } from '../utils';
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

    const path = `/${this.props.locale}/articles/${e.value}`;
    browserHistory.push(path);
    this.props.dispatch(updateArticlePermalink(e.value));
    
  }

  componentWillReceiveProps(nextProps){
    let options = _.map(nextProps.articleLists, list => {
      return {
        value: list.permalink,
        label: `${list.title_ko} ${isPresent(list.author_ko) ? " / " + list.author_ko : ""}`
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
    browserHistory.push(document.location.pathname.replace(/en|ko/, locale));
  }

  render() {

    let colorByPage = this.props.currentArticlePermalink == '/' ? 'white' : 'black';
    // console.log(this.props.currentArticlePermalink);

    return (
      this.state.options.length > 0 ? 
      <div className="article-lists">
        <a href="/" onClick={this.handleHomeClick.bind(this)} className="article-lists__home-btn">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
              <g id="home-icon" style={{ stroke: colorByPage, fill: 'none'}}>
                  <polyline id="Path-3" points="0.88671875 9.55786133 9.01953125 0.962890625 16.8894043 9.55786133"></polyline>
                  <polyline id="Path-4" points="3.49560547 10.2353516 3.49560547 17.1114878 13.9907227 17.1114878 13.9907227 10.2353516"></polyline>
              </g>
          </svg>
        </a>
        <div className={`article-lists__indic ${colorByPage}`} >
          글
        </div>
        <div className="article-lists__list">
          <Select options={this.state.options} onChange={this.handleChange} searchable={false} value={this.props.currentArticlePermalink} />
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
    locale: state.locale
  };
};
export default connect(mapStateToProps)(ArticleLists);