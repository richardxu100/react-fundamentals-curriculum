import React, { Proptypes } from 'react';
import Day from './Day';
require('../styles/style.css');

function Forecast(props) {
	console.log(props.place);
	return props.isLoading === true
		? <p>Loading</p>
		: <Day />

}

export default Forecast;
