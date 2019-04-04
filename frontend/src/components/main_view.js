import React, { Component } from 'react';
// ui import
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
// react component import
import logo from '../resources/logo.jpg';
import FoodDisplay from './food_display';
import FilterView from './filter_view';
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
class MainView extends Component {
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
			// 'timeSliderValue' keeps track of the time restriction slider value
			timeSliderValue: 0,
			// 'calorieSliderValue' keeps track of the time restriction slider value
			calorieSliderValue: 0,
			// 'exclusionTags' keeps track of all the ingredients to be excluded
			exclusionTags: [],
			// 'dietaryRestriction' notes dietary restriction selected by user
			dietaryRestriction: '',
			// 'userFilter' marks if filters are used
			useFilter: false,
		};
	}

	// called when the search button is clicked
	searchButtonCallback = () => {
		if (this.state.userInput !== '') {
			this.setState({ 
				searched: true,
				loading: true,
				foodList: null,
				useFilter: false
			});
		}
	}

	// called when the advanced search button is clicked
	advancedSearchButton = () => {
		if (this.state.userInput !== '') {
			this.setState({ 
				searched: true,
				loading: true,
				foodList: null,
				useFilter: true
			});
		}
	}


	// called when food list data is fetched and to be stored
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

	// called when exit the food detail screen
	exitFoodDetailCallBack = () => {
		this.setState({ 
			foodDetail: false,
			foodData: null
		});
	}

	// called when go into a food detail screen
	foodDetailCallback = (data) => {
		this.setState({ 
			foodDetail: true,
			foodData: data,
		});
	}

	// called when the time restriction slider's value changed
	timeSliderChange = (value) => {
		this.setState({ timeSliderValue: value });
	};

	// called when the calorie restriction slider's value changed
	calorieSliderChange = (value) => {
		this.setState({ calorieSliderValue: value });
	};

	// called when user change input tag
    exclusionTagsChange = (value) => {
    	this.setState({ 
    		exclusionTags: value,
    	});
    }
	
    // called when user change input tag
    dietaryRestrictionChange = (value) => {
    	this.setState({ 
    		dietaryRestriction: value,
    	});
    }

    render() {
    	const { classes } = this.props;
    	if (!this.state.loading) {
    		if (!this.state.searched) {
    			// the initial screen with the search bar in the center
    			return (
    				<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', paddingTop: '5%' }}>
    					{/* content line up vertically */}
    					<div style={{ margin: 20 }}>
    						<img src={logo} alt='logo' />
    					</div>
    					{/* search section */}
    					<div style={{ display: 'flex', flexDirection: 'row', width:'50%', alignItems: 'center', marginBottom: 40 }}>
    						<div className={classes.search}>
    							<div className={classes.searchIcon}>
    								<SearchIcon />
    							</div>
    							<InputBase
    								value={this.state.userInput}
    								onChange={(e) => this.setState({ userInput: e.target.value })}
    								placeholder="Search…"
    								classes={{
    									root: classes.inputRoot,
    									input: classes.inputInput,
    								}}
    							/>
    						</div>
    						<div style={{marginLeft: '2%'}}>
    							<Button onClick={this.searchButtonCallback} variant="contained" style={{ backgroundColor: green[300]}}>
									Search
    							</Button>
    						</div>
    					</div>
    					{/* expandable filter */}
    					<FilterView 
    						timeSliderValue={this.state.timeSliderValue}
    						calorieSliderValue={this.state.calorieSliderValue}
    						exclusionTags={this.state.exclusionTags}
    						dietaryRestriction={this.state.dietaryRestriction}
    						useFilter={this.state.useFilter}
    						timeSliderChangeCallBack={this.timeSliderChange}
    						calorieSliderChangeCallBack={this.calorieSliderChange}
    						exclusionTagsChangeCallBack={this.exclusionTagsChange}
    						dietaryRestrictionChangeCallBack={this.dietaryRestrictionChange}
    						advancedSearchButtonCallback={this.advancedSearchButton}
    					/>
    				</div>
    			);
  			} else if (!this.state.foodDetail) {
    			// the view with the search bar on top of the card view
    			return (
    				<div>
    					{/* after search view */}
    					<div style={{marginTop: '1%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    						<div style={{display: 'flex', flexDirection: 'row', width:'60%', alignItems: 'center'}}>
    							<img src={logo_small} alt='logo' onClick={this.gobackButtonCallback}/>
    							<div style={{marginTop: '1%', marginLeft: '5%', width:'100%'}}>
    								{/* <FPISearchbar /> */}
    								<div className={classes.search}>
    									<div className={classes.searchIcon}>
    										<SearchIcon />
    									</div>
    									<InputBase
    										value={this.state.userInput}
    										onChange={(e) => this.setState({ userInput: e.target.value })}
    										placeholder="Search…"
    										classes={{
    											root: classes.inputRoot,
    											input: classes.inputInput,
    										}}
    									/>
    								</div>
    							</div>
    							<Button onClick={this.searchButtonCallback} variant="contained" style={{ backgroundColor: green[300], marginLeft: '2%'}} >
									Search
    							</Button>
    						</div>
    						<FilterView 
    							timeSliderValue={this.state.timeSliderValue}
    							calorieSliderValue={this.state.calorieSliderValue}
    							exclusionTags={this.state.exclusionTags}
    							dietaryRestriction={this.state.dietaryRestriction}
    							useFilter={this.state.useFilter}
    							timeSliderChangeCallBack={this.timeSliderChange}
    							calorieSliderChangeCallBack={this.calorieSliderChange}
    							exclusionTagsChangeCallBack={this.exclusionTagsChange}
    							dietaryRestrictionChangeCallBack={this.dietaryRestrictionChange}
    							advancedSearchButtonCallback={this.advancedSearchButton}
    						/>
    					</div>
    					{/* end of the after search portion */}
    					<FoodDisplay 
    						userInput={this.state.userInput} 
    						foodList={this.state.foodList}
    						callbackFromParent={this.foodDetailCallback} 
    						updateFoodList={this.foodListSave}
    						useFilter={this.state.useFilter}
    						calorie={this.state.calorieSliderValue}
    						time={this.state.timeSliderValue}
    						exclusionTags={this.state.exclusionTags}
    						dietaryRestriction={this.state.dietaryRestriction}
    					/>
    				</div>
    			);
    		} else {
    			console.log(this.state.foodData);
    			return (
    				<FoodDetail 
    					data={this.state.foodData} 
    					exitFoodDetailCallBack={this.exitFoodDetailCallBack}/>
    			);
    		}
    	} else {
    		this.setState({ loading: false });
    		return (
    			<div></div>
    		);
    	}
    }
}

export default withStyles(styles)(MainView);