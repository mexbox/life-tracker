import React, {Component} from 'react';
//React UI & Theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
const themes = {
	darkBaseTheme: getMuiTheme(darkBaseTheme, {userAgent: 'all'}),
	lightBaseTheme: getMuiTheme(lightBaseTheme, {userAgent: 'all'})
};
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

// Components
import BottomNav from '../components/BottomNav'

export default class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static propTypes = {
		title: React.PropTypes.string.isRequired
	};

	render() {
		return (
			<MuiThemeProvider muiTheme={themes['lightBaseTheme']}>
				<div className="page">
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}
