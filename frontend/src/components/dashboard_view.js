import React from 'react';
import Button from '@material-ui/core/Button';

import green from '@material-ui/core/colors/green';
import fire from '../config/firebase';

export default class DashboardView extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
        <div>
            <h1> You are Logged in </h1>
            <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: green[300]}}
                onClick={this.props.logoutButtonCallback}
            >
            Logout
            </Button>
        </div>

    );
  }
}