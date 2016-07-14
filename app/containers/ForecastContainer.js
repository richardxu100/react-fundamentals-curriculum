import React, { Component } from 'react';
import ForecastWrapper from '../components/ForecastWrapper';
import helpers from '../utils/weatherHelpers';

export default class ForecastContainer extends Component {

	// getDefaultProps() {
	// 	let today = new Date();
	// 	let todayNumber = today.getDay();
	// 	let dayNames = helpers.addNames(todayNumber);							
	// 	console.log(dayNames); 
	// 	return {
	// 		dayNames: [dayNames]	
	// 	}
	// }
	
	constructor() {
		super();
		this.state = {
			isLoading: true,
			weatherInfo: [],
		};
	}
	
	componentDidMount = () => {
		let place = this.props.params.place;
		helpers.getForecast(place) 
			.then(function(info) {
				console.log(info);
				this.setState({
					weatherInfo: info,
					isLoading: false,
				})
			}.bind(this));	//have to bind this in the inner function				
	}

	render() {
		console.log(helpers.getDayNames());
		let dayNames = helpers.getDayNames();
		return (
			<ForecastWrapper 
				place={this.props.params.place} 
				isLoading={this.state.isLoading} 
				weatherInfo={this.state.weatherInfo} 
				dayNames={dayNames} 
			/>
		)
	}
}