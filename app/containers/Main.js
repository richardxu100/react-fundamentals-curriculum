import React, {Component} from 'react';
import Home from '../components/Home';

export default class HelloWorld extends Component {
	render() {
		return (
			<Home onSubmit={this.onSubmit} />
		)
	}
}