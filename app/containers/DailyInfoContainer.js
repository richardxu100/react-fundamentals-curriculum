import React, { Component } from 'react';
import DayItem from '../components/DayItem';
import DailyInfo from '../components/DailyInfo';
import helpers from '../utils/weatherHelpers';
import styles from '../styles/index';

export default class DailyInfoContainer extends Component {
	
	render() {
		let dayNumber = this.props.location.state.dayNumber;
		let dayData = this.props.location.state.dayData[dayNumber];
		console.log(this);
		return (
			<div style={styles.dailyInfo}>
				<DayItem 
					dayName={helpers.getDayName(dayData.dt)}
					icon={dayData.weather[0].icon}
				/>
				<DailyInfo 
					place={this.props.params.place}
					description={dayData.weather[0].description}
					minTemp={dayData.temp.min}
					maxTemp={dayData.temp.max}
					humidity={dayData.humidity}
				/>
			</div>
		)
	}
}
