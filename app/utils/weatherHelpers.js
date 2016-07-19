import axios from 'axios';

const API_KEY = 'b0fd8846c344b26e531769707e956d72';

const daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

const monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

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
	// getDayNames() {
	// 	let today = new Date();
	// 	let todayNumber = today.getDay();
	// 	let dayNames = this.addDays(todayNumber);							
	// 	return dayNames;		
	// },
	getDayName (unixTimestmap) {
	  var date = new Date(unixTimestmap * 1000);
	  var day = daysMap[date.getDay()]
	  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
	  return day + ', ' + month;
	},
	convertTemp (kelvin) {
 	 return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
	}	
}

export default helpers;