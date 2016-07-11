import React from 'react';
require('../styles/style.css');

function SearchBar(props) {
	return (
		<form>
			<div className="ui action input"> 
				<input type="text" placeholder="St. Georgia, Utah"/>
				<button className="ui blue button" type="submit">Get Weather</button>
			</div>	
		</form>
	)
}

module.exports = SearchBar;