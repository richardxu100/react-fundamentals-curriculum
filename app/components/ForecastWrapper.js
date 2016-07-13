import React, { Proptypes } from 'react';
import DayItem from './DayItem';
require('../styles/style.css');

function ForecastWrapper(props) {
	console.log(props.place);
	return props.isLoading === true
		? <p>Loading</p>
		: <div>
				<h2 className="ui centered header" id="place_header">{props.place}</h2>
				<h3 className="ui centered header">Select a Day</h3>	
				<div className="ui stackable centered grid">
					<div className="row">
						<DayItem dayName={props.dayName} />
						<DayItem dayName={props.dayName} />
						<DayItem dayName={props.dayName} />
						<DayItem dayName={props.dayName} />
						<DayItem dayName={props.dayName} />
					</div>
				</div>	
			</div>			
			
}

export default ForecastWrapper;
