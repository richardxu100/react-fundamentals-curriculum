import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import weatherHelpers from '../utils/weatherHelpers';

export default class SearchBarContainer extends Component {
	
	constructor() {
		super();
		this.state = { place: '' };
	}
	
	handleUpdatePlace(event) {
		this.setState({
			place: event.target.value
		});
		// console.log(event.target.value)
	}

	handleSubmitPlace(event) {
		event.preventDefault();
		let place = this.state.place;	
		const weather = 
			weatherHelpers.getFiveDay(place)
				.then(function(info) {
					console.log(info);
					// console.log(info.data.weather[0].description);
					return info;
				})				
	}
	
	render() {
		return (
			<SearchBar 
				onSubmitPlace={this.handleSubmitPlace.bind(this)} 
				onUpdatePlace={this.handleUpdatePlace.bind(this)} //need to change the context of a function in a function
				place={this.state.place}
			/>
		) 
	}
}
