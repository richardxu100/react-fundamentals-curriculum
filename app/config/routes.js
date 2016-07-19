import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import FrontPage from '../pages/FrontPage';
import ForecastContainer from '../containers/ForecastContainer';
import DailyInfoContainer from '../containers/DailyInfoContainer';

const routes = ( //check if this works
	<Router history={hashHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={FrontPage}/>
			<Route path="forecast/:place" component={ForecastContainer} />	
			<Route path="detail/:place" component={DailyInfoContainer} />
		</Route>
	</Router>
);

export default routes;