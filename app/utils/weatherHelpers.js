import axios from 'axios';

const API_KEY = 'b0fd8846c344b26e531769707e956d72';

const weatherHelpers = {
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
	getDayName(dayNumber) {
		const fiveDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return fiveDays[dayNumber];
		console.log(days[today.getDay()]);		
	}
}

export default weatherHelpers;