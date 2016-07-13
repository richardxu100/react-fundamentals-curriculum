import React, { Component } from 'react';
import ForecastWrapper from '../components/ForecastWrapper';
import weatherHelpers from '../utils/weatherHelpers';

export default class ForecastContainer extends Component {

	getDefaultProps {
		const today = new Date();
		const dayNumber = today.getDay();
		const dayName = weatherHelpers.getDayName();
		const dayNames = [] 
		return {
			dayNames: []	
		}
	}

	constructor() {
		super();
		this.state = {
			isLoading: true,
			weatherInfo: []
		}
	}
	
	componentDidMount = () => {
		let place = this.props.params.place;
		weatherHelpers.getForecast(place) 
			.then(function(info) {
				console.log(info);
				this.setState({
					weatherInfo: info,
					isLoading: false
				})
			}.bind(this));	//have to bind this in the inner function				
	}

	render() {
		return (
			<ForecastWrapper 
				place={this.props.params.place} 
				isLoading={this.state.isLoading} 
				weatherInfo={this.state.weatherInfo} 
				dayNames={this.props.dayNames} 
			/>
		)
	}
}