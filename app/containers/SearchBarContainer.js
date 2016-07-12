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
		console.log('hi');
		this.setState({
			place: event.target.value
		});
	}

	handleSubmitPlace(event) {
		event.preventDefault();
		console.log('hi');
		let place = this.state.place;
	}

	render() {
		return (
			<SearchBar 
				onSubmitPlace={this.handleSubmitPlace} 
				onUpdatePlace={this.handleUpdatePlace}
				place={this.state.place}
			/>
		) 
	}
}
