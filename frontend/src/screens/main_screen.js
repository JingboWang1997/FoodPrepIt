import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import green from '@material-ui/core/colors/green';

import MainView from '../components/main_view';
import LoginView from '../components/login_view';
import IngredientsearchView from '../components/ingredientsearch_view';

function LinkTab(props) {
	return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

function DisplayPage(props) {
	if (props.value === 0) {
		return <LoginView loginStateCallback={props.loginStateCallback} loggedin={props.loggedin}/>;
	} else if (props.value === 1) {
		return <MainView />;
	} else if (props.value === 2) {
		return <IngredientsearchView />;
	} else if (props.value === 3) {
		return <h1>Currently Not Available</h1>;
	}
}

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
			loggedin: false,
		};
	}

  // called when the login button is clicked
  loginStateCallback = (dataFromChild) => {
  	console.log('datafromchild: ',dataFromChild);
  	this.setState({ 
  		loggedin: dataFromChild,
  	});
  }
  

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
  						<LinkTab label="History" href="page1"/>
  						<LinkTab label="Keyword Search" href="page2" />
  						<LinkTab label="Ingredient Search" href="page3" />
  						<LinkTab label="Not Available" href="page4" disabled="true"/>
  					</Tabs>
  				</AppBar>
  				{<DisplayPage value={value} loginStateCallback={this.loginStateCallback} loggedin={this.state.loggedin}/>}

					{/*{{value} === "0"? (<LoginView loginCallback={this.loginCallback}/>)
            : {value} === 1? (<MainView />)
            : {value} === 2? (<MainView />)
            : {value} === 3?  (<h1>Currently Not Available</h1>)
            : <div>none</div>}}*/}

  				{/* {value === 0 && <TabContainer>Dashboard</TabContainer>}
          		{value === 1 && <TabContainer>Keyword Search</TabContainer>}
          		{value === 2 && <TabContainer>Ingredient Search</TabContainer>}
          		{value === 3 && <TabContainer>Nutrient Check</TabContainer>} */}
  			</div>
  		</NoSsr>
  	);
	}
}