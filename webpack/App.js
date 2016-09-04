import React, { Component } from 'react';
import { connect } from 'react-redux';
import { windowResize, updateLocale  } from './actions'; 
import { isPresent } from './utils';

class App extends Component {
	constructor(props){
		super(props);

		this.handleResize = this.handleResize.bind(this);	
	}

	componentDidMount(){
		window.addEventListener("resize", this.handleResize);
		this.handleResize();

		if (!_.isUndefined(this.props.params.locale)){
			this.props.dispatch(updateLocale(this.props.params.locale));
		} 
		// this.dispatch(changeLo)
	}

	componentWillReceiveProps(nextProps){

		if (!_.isUndefined(nextProps.params.locale)){
			this.props.dispatch(updateLocale(nextProps.params.locale));
		}
	}



	handleResize(e){
		this.props.dispatch(windowResize(window.innerWidth, window.innerHeight));
	}


	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}


export default connect()(App);