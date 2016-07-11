import React, {Component} from 'react';
// import Home from '../components/Home';
import Masthead from '../components/Masthead';
import Navbar from '../components/Navbar';

export default class Main extends Component {
	render() {
		return (
			<Masthead>
				<Navbar />		
				{this.props.children}	
			</Masthead>
		)
	}
}