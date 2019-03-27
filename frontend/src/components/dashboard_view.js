import React from 'react';
import Button from '@material-ui/core/Button';

import green from '@material-ui/core/colors/green';

export default class DashboardView extends React.Component {
    
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