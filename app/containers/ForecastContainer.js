import React, { Component } from 'react';
import Forecast from '../components/Forecast';
import weatherHelpers from '../utils/weatherHelpers';

export default class ForecastContainer extends Component {
	
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
			<Forecast place={this.props.params.place} isLoading={this.state.isLoading} weatherInfo={this.state.weatherInfo} />
		)
	}
}