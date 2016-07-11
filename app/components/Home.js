import React from 'react';
import ReactRouter, { Link } from 'react-router';
// const Link = ReactRouter.Link;
require('../css/style.css');

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

module.exports = Home;