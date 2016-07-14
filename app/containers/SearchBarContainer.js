import React, { Component, PropTypes } from 'react';
import SearchBar from '../components/SearchBar';
import weatherHelpers from '../utils/weatherHelpers';

export default class SearchBarContainer extends Component {

	static contextTypes = { //es7 static allowed contextTypes to work!
		router: React.PropTypes.object.isRequired 
	}

	constructor(context) {
		super();
		this.state = { place: '' };
	}
	
	handleUpdatePlace = (event) => { //babel 7 features like arrows need babel-preset-stage-0
		this.setState({
			place: event.target.value
		});
	}

	handleSubmitPlace = (event) => {
		event.preventDefault();
		this.context.router.push(`/forecast/${this.state.place}`);		
	}
	
	render() {
		return (
			<SearchBar 
				onSubmitPlace={this.handleSubmitPlace} 
				onUpdatePlace={this.handleUpdatePlace} //need to change the context of a function in a function
				place={this.state.place}
			/>
		) 
	}
}


