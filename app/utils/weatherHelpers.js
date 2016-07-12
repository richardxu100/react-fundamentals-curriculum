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
	getFiveDay(place) {
		return (
			axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${place}&type=accurate&APPID=${API_KEY}&cnt=5`)
				.then(function(info) {
					return info;
				})
				.catch(function(err) {
					console.warn('Error in weatherHelpers', err)
				})				
		);
	}
}

export default weatherHelpers;