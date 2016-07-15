import React, { Component } from 'react';
import ForecastWrapper from '../components/ForecastWrapper';
import helpers from '../utils/weatherHelpers';

export default class ForecastContainer extends Component {
	
	constructor() {
		super();
		this.state = {
			isLoading: true,
			dayData: [],
		};
	}
	
	componentDidMount = () => {
		let place = this.props.params.place;
		helpers.getForecast(place) 
			.then(function(info) {
				let dayData = info.data.list;
				this.setState({
					dayData: dayData,
					isLoading: false
				})
			}.bind(this));	//have to bind this in the inner function				
	}

	render() {
		let dayNames = helpers.getDayNames();
		// let dayData = this.state.weatherInfo.data.list;
		return (
			<ForecastWrapper 
				place={this.props.params.place} 
				isLoading={this.state.isLoading} 
				dayData={this.state.dayData} 
			/>
		)
	}
}