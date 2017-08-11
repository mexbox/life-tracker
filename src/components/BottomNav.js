import React, {Component} from 'react';
import {Link} from 'react-router';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import IconFamily from 'material-ui/svg-icons/action/pregnant-woman';
import IconHome from 'material-ui/svg-icons/action/home';
import IconResume from 'material-ui/svg-icons/hardware/developer-board';
const familyIcon = <IconFamily />;
const homeIcon = <IconHome />;
const resumeIcon = <IconResume />;

export default class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedIndex: 0};
	}

	componentDidMount(){
  		var selectedIndex;

  		if(window.location.pathname.indexOf('/resume') > -1){
  			selectedIndex = 0;
  		}else if(window.location.pathname.indexOf('/family') > -1){
  			selectedIndex = 2;
  		}else{
  			selectedIndex = 1;
  		}
  		this.setState({selectedIndex: selectedIndex, runAnimation:true});
  		this.animTimer = setTimeout(() => this.setState({runAnimation:false}), 1500);
	}

	componentWillUnmount() {
		clearInterval(this.animTimer);
		this.setState({runAnimation:false})
 	}

	render(){
		return (
				<BottomNavigation id="bottom-nav" style={{position:"fixed",bottom:"0px", opacity:.8, textAlign:"center"}} selectedIndex={this.state.selectedIndex}>
			    	<BottomNavigationItem
			      	label="Resume"
			      	icon={resumeIcon}
			      	containerElement={<Link to="/resume"/>}
			    	/>
				    <BottomNavigationItem
				    label="Welcome"
				    icon={homeIcon}
				    containerElement={<Link to="/"/>}
				    />
			    	<BottomNavigationItem
			      	label="Family"
			      	icon={familyIcon}
			      	containerElement={<Link to="/family"/>}
			    	/>
			    </BottomNavigation>
			)
	}

}
