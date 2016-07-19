import React, { PropTypes } from 'react';
import helpers from '../utils/weatherHelpers';

function DailyInfo(props) {
	<div className="row">
	  <div className="four wide column">
	    <h4>{props.place}</h4>
	    <h4>{props.description}</h4>
	    <h4>{helpers.convertTemp(props.minTemp)}</h4>
	    <h4>{helpers.convertTemp(props.maxTemp)}</h4>  
	    <h4>{props.humidity}</h4>  
	  </div>
	</div>	
}

DailyInfo.PropTypes = {
	place: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	minTemp: PropTypes.number.isRequired,
	maxTemp: PropTypes.number.isRequired,
	humidity: PropTypes.number.isRequired
}

export default DailyInfo;

