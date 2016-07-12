import React, { PropTypes } from 'react';
import ReactRouter, { Link } from 'react-router'
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
				<Link to="/forecast/:city">
					<button className="ui primary button" type="submit">Get Weather</button>
				</Link>
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

