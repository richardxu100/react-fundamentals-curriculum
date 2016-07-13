import React, { PropTypes } from 'react';
import ReactRouter, { Link } from 'react-router'
require('../styles/style.css');

function SearchBar(props) { //don't need colon in Link to={.../:} because the colon is only used in routes to make the next word a route param
	return (
		<form onSubmit={props.onSubmitPlace}>
			<div className="ui action input"> 
				<input 
					type="text" 
					placeholder="St. Georgia, Utah"
					onChange={props.onUpdatePlace} 
					value={props.place}
				/>
				<Link to={`/forecast/${props.place}`} className="ui primary button" type="submit">Get Weather</Link>
			</div>	
		</form>
	)
}

SearchBar.PropTypes = {
	onSubmitPlace: PropTypes.func.isRequired, 
	onUpdatePlace: PropTypes.func.isRequired,
	place: PropTypes.string.isRequired
}

export default SearchBar;

