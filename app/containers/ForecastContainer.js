import React, { Component } from 'react';
import Forecast from '../components/Forecast';

export default class ForecastContainer extends Component {
	
	constructor() {
		super();
		this.state = {
			isLoading: true,
			weatherInfo: []
		}
	}
	
	componentDidMount() {
		
	}

	render() {
		return (
			<Forecast city={this.props.params} isLoading={this.state.isLoading} weatherInfo={this.state.weatherInfo} />
		)
	}
}