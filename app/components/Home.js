import React from 'react';
import ReactRouter from 'react-router';
const Link = ReactRouter.link;
require('../css/styles.css');

function Home(props) {
	return (
		<div id="masthead">
			<div className="menu">Navbar Stuff</div>
			<form onSubmit="{props.onSubmit}">
				<input type="text"/>
				<button className="ui green button" type="submit">Get Weather</button>
			</form>
		</div>
	)
}