import React from 'react';
require('../styles/style.css');

function Masthead(props) {
	return (
		<div className="masthead">
			{props.children}
		</div>
	)
}

module.exports = Masthead;