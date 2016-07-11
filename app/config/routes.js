import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/Main';
import FrontPage from '../components/FrontPage';

const routes = ( //check if this works
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={FrontPage}/>
			
		</Route>
	</Router>
);

export default routes;