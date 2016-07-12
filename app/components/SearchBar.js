import React, { PropTypes } from 'react';
require('../styles/style.css');

function SearchBar(props) {
	return (
		<form onSubmit={props.onSubmitPlace}>
			<div className="ui action input"> 
				<input 
					type="text" 
					placeholder="St. Georgia, Utah"
					onChange={props.onUpdatePlace} 
					value={props.place}
				/>
				<button className="ui primary button" type="submit">Get Weather</button>
			</div>	
		</form>
	)
}

SearchBar.PropTypes = {
	onSubmitPlace: PropTypes.func.isRequired, 
	onUpdatePlace: PropTypes.func.isRequired,
	place: PropTypes.string.isRequired
}

module.exports = SearchBar;

