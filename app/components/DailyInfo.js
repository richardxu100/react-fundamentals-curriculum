import React, { PropTypes } from 'react';
import helpers from '../utils/weatherHelpers';

function DailyInfo(props) {
	return (
		<div className="row">
		  <div className="four wide column">
		    <h4>Area: {props.place}</h4>
		    <h4>Description: {props.description}</h4>
		    <h4>Min: {helpers.convertTemp(props.minTemp)}&#176;</h4>
		    <h4>Max: {helpers.convertTemp(props.maxTemp)}&#176;</h4>  
		    <h4>Humidity: {props.humidity}</h4>  
		  </div>
		</div>	
	)
	
}

DailyInfo.PropTypes = {
	place: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	minTemp: PropTypes.number.isRequired,
	maxTemp: PropTypes.number.isRequired,
	humidity: PropTypes.number.isRequired
}

export default DailyInfo;

