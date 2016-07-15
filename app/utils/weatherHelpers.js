import axios from 'axios';

const API_KEY = 'b0fd8846c344b26e531769707e956d72';

const helpers = {
	getDailyWeather(place) {
		return (
			axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${place}&type=accurate&APPID=${API_KEY}`)
				.then(function(info) {
					return info;
				})
				.catch(function(err) {
					console.warn('Error in weatherHelpers', err)
				})
		);
	},
	getForecast(place) {
		return (
			axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${place}&type=accurate&APPID=${API_KEY}&cnt=5`)
				.then(function(info) {
					return info;
				})
				.catch(function(err) {
					console.warn('Error in weatherHelpers', err)
				})				
		);
	},
	addDays(todayNumber) {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	  const dayNames = [];
	  for (let i = todayNumber; i < todayNumber + 5; i++) {
	    dayNames.push(days[i]);
	  }
	  return dayNames;
	},
	getDayNames() {
		let today = new Date();
		let todayNumber = today.getDay();
		let dayNames = this.addDays(todayNumber);							
		return dayNames;		
	}
	// iconChooser(weatherInfo, dayNumber) {
	// 	if (weatherInfo.list[dayNumber].clouds > 30 && weatherInfo.list[dayNumber].rain > 10) {
	// 		return 'day-rain';
	// 	} else if (weatherInfo.list[dayNumber].clouds > 30) {
	// 		return 'day-cloudy';
	// 	} else if (weatherInfo.list[dayNumber].rain > 10) {
	// 		return 'day-rain-wind';
	// 	} else {
	// 		return 'day-sunny';
	// 	}
	// }		
}

export default helpers;