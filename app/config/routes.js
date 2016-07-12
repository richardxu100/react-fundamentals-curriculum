import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import FrontPage from '../pages/FrontPage';

const routes = ( //check if this works
	<Router history={hashHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={FrontPage}/>
			
		</Route>
	</Router>
);

export default routes;