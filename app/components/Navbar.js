import React from 'react';
import SearchBar from './SearchBar';
require('../styles/style.css');

function Navbar(props) {
	return (
		<div className="ui inverted large menu" id="navbar">
			<a className="item" href="#">
				<h3>Clever Title</h3>
			</a>
			<div className="right item">
				<SearchBar />
			</div>
		</div>		
	)
}

module.exports = Navbar;