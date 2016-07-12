import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export default class SearchBarContainer extends Component {
	
	constructor() {
		super();
		this.state = {
			place: ''
		}
	}
	
	handleUpdatePlace(event) {
		this.setState({
			place: event.target.value
		});
		console.log(event.target.value);
	}

	handleSubmitPlace(event) {
		event.preventDefault();
		let place = this.state.place;	
	}
	
	render() {
		return (
			<SearchBar 
				onSubmitPlace={this.handleSubmitPlace} 
				onUpdatePlace={this.handleUpdatePlace.bind(this)} //need to change the context of a function in a function
				place={this.state.place}
			/>
		) 
	}
}
