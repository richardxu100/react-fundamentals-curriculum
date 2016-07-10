import React from 'react';
import ReactRouter from 'react-router';
const Link = ReactRouter.link;
require('../css/styles.css');

function Home() {
	return (
		<div id="masthead">
			<input type="text"/>
			<button className="ui green button">Get Weather</button>
		</div>
	)
}