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
		};
	}

	// called when the search button is clicked
	searchButtonCallback = () => {
		if (this.state.userInput !== '') {
			this.setState({ 
				searched: true,
				loading: true
			});
		}
	}

	// called when the search button is clicked
	gobackButtonCallback = () => {
		if (this.state.userInput !== '') {
			this.setState({ 
				searched: false,
				loading: false,
				userInput: ''
			});
		}
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
						{/* expandable */}
						<div className={classes.root} style={{ width:'50%'}}>
							<ExpansionPanel>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
									<Typography className={classes.heading}>Advanced Filters</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingBottom: '10%'}}>
										<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
											<FPISlider value={2} name={"Food Supply Budget ($)"}/>
											<FPISlider value={1} name={"Preperation Time (minutes)"}/>
											<FPISlider value={0} name={"Calorie Limit (Cal)"}/>
										</div>
										<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', paddingLeft: '100px'}}>
											<FPITaginput style={{ paddingBottom: '20%'}}/>
											<FPIDropdown />
										</div>
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>	
						</div>
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
								<Button onClick={this.searchButtonCallback} variant="contained" style={{ backgroundColor: green[300], marginLeft: '2%'}}>
									Search
								</Button>
							</div>
							<div className={classes.root} style={{marginBottom: '3%'}}>
								<ExpansionPanel>
									<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
										<Typography className={classes.heading}>Advanced Filters</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingBottom: '10%'}}>
											<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
												<FPISlider value={2} name={"Food Supply Budget ($)"}/>
												<FPISlider value={1} name={"Preperation Time (minutes)"}/>
												<FPISlider value={0} name={"Calorie Limit (Cal)"}/>
											</div>
											<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', paddingLeft: '100px'}}>
												<FPITaginput style={{ paddingBottom: '20%'}}/>
												<FPIDropdown />
											</div>
										</div>
									</ExpansionPanelDetails>
								</ExpansionPanel>	
							</div>
						</div>
						{/* end of the after search portion */}
						<FoodDisplay userInput={this.state.userInput} callbackFromParent={this.foodDetailCallback}/>
					</div>
				);
			} else {
				return (
					<FoodDetail data={this.state.foodData}/>
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