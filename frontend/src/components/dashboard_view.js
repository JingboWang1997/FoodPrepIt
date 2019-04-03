import React from 'react';
// ui import
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
// react component import
import FPISlider from './fpislider_component';
import FPITaginput from './fpitaginput_component';
import FPIDropdown from './fpidropdown_component';
import logo from '../resources/logo.jpg';
import FoodDisplay from './food_display';
import HistoryFoodDisplay from './history_food_display';
// resources import
import logo_small from '../resources/logo_small.jpg';
import FoodDetail from './food_detail';

// css definition
const styles = theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: grey[300],
		'&:hover': {
			backgroundColor: grey[400],
		},
		width: '100%',
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
	root: {
		width: '60%', 
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
});

// the main view of the app
class DashboardView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			// 'searched' indicates change from inital search view to minimized search view
			searched: false,
			// 'foodDetail' indicates if a foodDetial is requested by a user click
			foodDetail: false,
			// 'loading' is to handle reloading of page when seach button is clicked in the minimized search view
			loading: false,
			// 'foodData' contains foodData if viewing details
			foodData: null,
			// 'foodList' contains the list view if preloaded
			foodList: null,
		};
	}

	// called when the search button is clicked
	searchButtonCallback = () => {
		if (this.state.userInput !== '') {
			this.setState({ 
				searched: true,
				loading: true,
				foodList: null
			});
		}
	}


	// called when food list data is set
	foodListSave = list => {
		this.setState({ 
			foodList: list,
		});
	}

	// called when go back from the secondary search view
	gobackButtonCallback = () => {
		if (this.state.userInput !== '') {
			this.setState({ 
				searched: false,
				userInput: '',
				foodList: null
			});
		}
	}

	// called when go back from the food detail screen
	exitFoodDetailCallBack = () => {
		this.setState({ 
			foodDetail: false,
			foodData: null
		});
	}

	// called when a food card is clicked
	foodDetailCallback = (data) => {
		this.setState({ 
			foodDetail: true,
			foodData: data,
		});
	}

	render() {
		const { classes } = this.props;
		return (
			// <FoodDisplay 
			// 	userInput={this.state.userInput} 
			// 	foodList={this.state.foodList}
			// 	callbackFromParent={this.foodDetailCallback} 
			// 	updateFoodList={this.foodListSave}
			// />;
			<div>
				<h1>History</h1>
				<h3>April 4th</h3>
				<HistoryFoodDisplay 
					userInput='' 
					foodList={null}
					callbackFromParent={this.foodDetailCallback} 
					updateFoodList={this.foodListSave}
				/>;
			</div>
		);
	}
}

export default withStyles(styles)(DashboardView);