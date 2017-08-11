import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './routes/Home';
// import Anything from './routes/Anything';
import NotFound from './routes/NotFound';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div  id="bg">
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={Home}/>
					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		</div>);
	}
}
// ex: <Route path="/whatever" component={Anything}/>
