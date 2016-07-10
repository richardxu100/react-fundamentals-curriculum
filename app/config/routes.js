import React from 'react';
import ReactRouter from 'react-router';
import Main from '../containers/Main';
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;

export const Routes = ( //check if this works
	<Router history="hashHistory">
		<Route path="/" component={Main}>
			
		</Route>
	</Router>
);