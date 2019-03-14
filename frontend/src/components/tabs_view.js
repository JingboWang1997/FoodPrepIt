import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import green from '@material-ui/core/colors/green';

import MainView from './main_view';

function LinkTab(props) {
	return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

function DisplayPage(props) {
	if (props.value === 0) {
		// return <FPIButton type="confirm" text="dashboard"/>
		return <h1>Currently Not Available</h1>;
	} else if (props.value === 1) {
		return <MainView />;
	} else if (props.value === 2) {
		return <MainView />;
	} else if (props.value === 3) {
		return <h1>Currently Not Available</h1>;
	}
}

export default class FPITabsView extends React.Component {
	state = {
		value: 1,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
  	const { value } = this.state;

  	return (
  		<NoSsr>
  			<div>
  				<AppBar position="static" style={{ backgroundColor: green[300] }}>
  					<Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
  						<LinkTab label="Not Available" href="page1" disabled="true"/>
  						<LinkTab label="Keyword Search" href="page2" />
  						<LinkTab label="Ingredient Search" href="page3" />
  						<LinkTab label="Not Available" href="page4" disabled="true"/>
  					</Tabs>
  				</AppBar>
  				<DisplayPage value={value}/>
  				{/* {value === 0 && <TabContainer>Dashboard</TabContainer>}
          		{value === 1 && <TabContainer>Keyword Search</TabContainer>}
          		{value === 2 && <TabContainer>Ingredient Search</TabContainer>}
          		{value === 3 && <TabContainer>Nutrient Check</TabContainer>} */}
  			</div>
  		</NoSsr>
  	);
	}
}

// export default withStyles(styles)(FPITabs);