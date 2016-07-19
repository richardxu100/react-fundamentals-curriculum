import React, { PropTypes } from 'react';
import DayItem from './DayItem';
import helpers from '../utils/weatherHelpers';
require('../styles/style.css');

//use github icons
function ForecastWrapper(props) {
	let i = 0;
	return props.isLoading === true
		? <p>Loading</p>
		: <div>
				<h2 className="ui centered header" id="place_header">{props.place}</h2>
				<h3 className="ui centered header">Select a Day</h3>	
				<div className="ui stackable centered grid">
					<div className="row">
						{props.dayData.map(function(dayData, i) {
							return (
								<DayItem 
									key={dayData.dt} 
									dayName={helpers.getDayName(dayData.dt)} 
									icon={dayData.weather[0].icon}
									onClickPlace={props.onClickPlace.bind(this, i)}
								/>	
							)
							i++;
						})}						
					</div>
				</div>	
			</div>								
	}

ForecastWrapper.propTypes = {
	place: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	dayData: PropTypes.array.isRequired
}

export default ForecastWrapper;

