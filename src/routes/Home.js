import React, {Component} from 'react';
import {Link} from 'react-router';
import Layout from './Layout';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styleSheet = {
	circleImg:{
	  height: '300px',
	  width: '219px',
	  overflow:'hidden',
	  display: 'inline-block',
	  verticalAlign: 'middle',
	  cursor:'pointer'
	},
};

export default class IndexPage extends Component {

	constructor(props){
		super(props);

		this.state = {
    	};
	}

	componentDidMount(){
	}

	componentWillUnmount() {

	}

	render() {
		var selectedIndex = this.state.selectedIndex;
		return (
			<Layout title="Home">
				<div id="page-index" style={{marginTop:"25px", textAlign: "center"}}>
					<Paper style={styleSheet.circleImg} zDepth={3} >
						<img src="https://2m6jhkfy6n528s2ahg5ermef-wpengine.netdna-ssl.com/wp-content/uploads/2012/12/self-tracking-3-219x300.jpeg" />
					</Paper>
					<h1> Life Tracking Done Right! </h1>
					<h3> Username </h3>
					<input type="text"/>
					<h3> Password </h3>
					<input type="text"/>
					<br/>
					<RaisedButton label="Go!" primary={true} style={{margin: 12}} />

				</div>
			</Layout>);
	}
}
