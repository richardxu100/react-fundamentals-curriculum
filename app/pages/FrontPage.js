import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer'
require('../styles/style.css');

function FrontPage(props) { //jsx is weird
	return (
		<div className="masthead">
			<h1 className="ui centered header">Enter a City and State</h1>
			<div className="input container">
				<SearchBarContainer />
			</div>
		</div>
	)
}

export default FrontPage;