import React from 'react';
// import Navbar from './Navbar';
import SearchBar from './SearchBar'
require('../styles/style.css');
// import styles from '../styles';

function FrontPage(props) { //jsx is weird
	return (
		<div>
			<h1 className="ui centered header">Enter a City and State</h1>
			<div className="input container">
				<SearchBar />
			</div>
		</div>
	)
}

module.exports = FrontPage;