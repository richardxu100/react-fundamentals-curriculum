import React, { Component } from 'react';
import ForecastWrapper from '../components/ForecastWrapper';
import helpers from '../utils/weatherHelpers';

export default class ForecastContainer extends Component {
	
	static contextTypes = { //es7 static allowed contextTypes to work!
		router: React.PropTypes.object.isRequired 
	}

	constructor() {
		super();
		this.state = {
			isLoading: true,
			dayData: [],
			dayNumber: undefined
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

	handleClickPlace = (i, event) => { //need to bind 'this' with the .bind(this, i) to get handleClickPlace to not think i is 'event'. Event HAS to be second, after 'i' for some reason. 
		event.preventDefault(); //you need event.preventDefault() to get state transfered. Did this in the wrapper
		console.log('The value of i: ' + i);
		this.context.router.push({
			pathname: `/detail/${this.props.params.place}`,
			state: {
				dayData: this.state.dayData,
				dayNumber: i
			}
		});
	}

	render() {
		// let dayNames = helpers.getDayNames();
		// let dayData = this.state.weatherInfo.data.list;
		return (
			<ForecastWrapper 
				place={this.props.params.place} 
				isLoading={this.state.isLoading} 
				dayData={this.state.dayData} 
				onClickPlace={this.handleClickPlace}
			/>
		)
	}
}