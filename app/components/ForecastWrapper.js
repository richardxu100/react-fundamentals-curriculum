import React, { PropTypes } from 'react';
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
						<DayItem dayName={props.dayNames[0]} />
						<DayItem dayName={props.dayNames[1]} />
						<DayItem dayName={props.dayNames[2]} />
						<DayItem dayName={props.dayNames[3]} />
						<DayItem dayName={props.dayNames[4]} />
					</div>
				</div>	
			</div>						
}

ForecastWrapper.propTypes = {
	place: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	dayNames: PropTypes.array.isRequired
}

export default ForecastWrapper;

