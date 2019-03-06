import React from 'react';
// import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ComponentsScreen from './screens/components_screen'

// import LoginScreen from './screens/login_screen';
// import KeywordsearchScreen from './views/mainsearch_view';
import MainScreen from './screens/main_screen';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainScreen />
      </div>

    );
  }
}
