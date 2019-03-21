import React from 'react';
// import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainScreen from './screens/main_screen';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<MainScreen />
				{/* <ComponentsScreen /> */}
				{/* <FoodDisplay /> */}
			</div>

		);
	}
}
