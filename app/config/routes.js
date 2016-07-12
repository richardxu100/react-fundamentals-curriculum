import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import FrontPage from '../pages/FrontPage';
import FiveDayContainer from '../containers/FiveDayContainer';


const routes = ( //check if this works
	<Router history={hashHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={FrontPage}/>
			<Route path="forecast/:city" component={FiveDayContainer} />						
		</Route>
	</Router>
);

export default routes;