import React, { Proptypes } from 'react';
require('../styles/style.css');

function Forecast(props) {
	console.log(props.city);
	return props.isLoading === true
		? <p>Loading</p>
		: <h1>Data Received</h1>
}

export default Forecast;
