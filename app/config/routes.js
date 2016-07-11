import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/Main';
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const hashHistory = ReactRouter.hashHistory;
// const IndexRoute = ReactRouter.IndexRoute;

const routes = ( //check if this works
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			
		</Route>
	</Router>
);

export default routes;