import React, { PropTypes } from 'react';
import DayItem from './DayItem';
require('../styles/style.css');

function ForecastWrapper(props) {
	return props.isLoading === true
		? <p>Loading</p>
		: <div>
				<h2 className="ui centered header" id="place_header">{props.place}</h2>
				<h3 className="ui centered header">Select a Day</h3>	
				<div className="ui stackable centered grid">
					<div className="row">
						{props.dayNames.map(function(dayName) {
							return <DayItem	key={dayName} dayName={dayName} />
						})}						
					</div>
				</div>	
			</div>						
}

/*
<DayItem dayName={props.dayNames[0]} />
<DayItem dayName={props.dayNames[1]} />
<DayItem dayName={props.dayNames[2]} />
<DayItem dayName={props.dayNames[3]} />
<DayItem dayName={props.dayNames[4]} />
*/

ForecastWrapper.propTypes = {
	place: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	dayNames: PropTypes.array.isRequired
}

export default ForecastWrapper;

