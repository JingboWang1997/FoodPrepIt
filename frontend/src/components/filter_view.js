import React, { Component } from 'react';
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
import Slider from '@material-ui/lab/Slider';
// react component import
import FPISlider from './fpislider_component';
import FPITaginput from './fpitaginput_component';
import FPIDropdown from './fpidropdown_component';
import logo from '../resources/logo.jpg';
import FoodDisplay from './food_display';
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

class FilterView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 'timeSliderValue' keeps track of the time restriction slider value
			timeSliderValue: this.props.timeSliderValue,
			// 'calorieSliderValue' keeps track of the time restriction slider value
			calorieSliderValue: this.props.calorieSliderValue,
			// 'exclusionTags' keeps track of all the ingredients to be excluded
			exclusionTags: this.props.exclusionTags,
			// 'dietaryRestriction' notes dietary restriction selected by user
			dietaryRestriction: this.props.dietaryRestriction,
			// 'userFilter' marks if filters are used
			useFilter: this.props.useFilter,
		};
	}
    
    timeSliderChange = (event, value) => {
    	this.setState({ timeSliderValue: value });
    	this.props.timeSliderChangeCallBack(value);
    };

	// called when the calorie restriction slider's value changed
	calorieSliderChange = (event, value) => {
		this.setState({ calorieSliderValue: value });
    	this.props.calorieSliderChangeCallBack(value);
	};

	// called when user change input tag
    exclusionTagsChange = (value) => {
    	this.setState({ 
    		exclusionTags: value,
    	});
    	this.props.exclusionTagsChangeCallBack(value);
    }
	
    // called when user set dietary restriction
    dietaryRestrictionChange = (value) => {
    	this.setState({ 
    		dietaryRestriction: value,
    	});
    	this.props.dietaryRestrictionChangeCallBack(value);
    }

    searchButtonClick = (event) => {
    	this.props.advancedSearchButtonCallback();
    }

    render() {
    	const { classes } = this.props;
    	return (
    		<div className={classes.root} style={{ width:'50%' }}>
    			<ExpansionPanel>
    				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
    					<Typography className={classes.heading}>Advanced Filters</Typography>
    				</ExpansionPanelSummary>
    				<ExpansionPanelDetails>
    					<div>
    						<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '7%'}}>
    							<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
    								<div style={{width: 300, marginLeft: '2%'}}>
    									{'Preperation Time'}: {this.state.timeSliderValue === 0 ? 'No Restriction' : ('<' + this.state.timeSliderValue + ' Minutes')}
    									<Slider
    										style = {{padding: '22px 0px'}}
    										value={this.state.timeSliderValue}
    										min={0}
    										max={100}
    										step={20}
    										onChange={this.timeSliderChange}
    									/>
    								</div>
    								<div style={{width: 300, marginLeft: '2%'}}>
    									{'Calorie Limit'}: {this.state.calorieSliderValue === 0 ? 'No Restriction' : ('<' + this.state.calorieSliderValue + ' Cal')}
    									<Slider
    										style = {{padding: '22px 0px'}}
    										value={this.state.calorieSliderValue}
    										min={0}
    										max={100}
    										step={20}
    										onChange={this.calorieSliderChange}
    									/>
    								</div>
    							</div>
    							<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', paddingLeft: '100px'}}>
    								<FPITaginput style={{ paddingBottom: '20%'}} text={'Input excluded ingredients:'} inputStateCallback={this.exclusionTagsChange} inputArr={this.state.exclusionTags}/>
    								<FPIDropdown changeCallBack={this.dietaryRestrictionChange} value={this.state.dietaryRestriction}/>
    							</div>
    						</div>
    						<div>
    							<Button variant="contained" style={{ backgroundColor: green[200]}} onClick={this.searchButtonClick}>Advanced Search</Button>
    						</div>
    					</div>
    				</ExpansionPanelDetails>
    			</ExpansionPanel>	
    		</div>
    	);
    }
}

export default withStyles(styles)(FilterView);