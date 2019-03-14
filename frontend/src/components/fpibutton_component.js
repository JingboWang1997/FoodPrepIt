import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
// a button component (will be deprecated)

class FPIButton extends Component {
	render() {
		if (this.props.type === 'confirm') {
			return (
				<div style={{marginLeft: '2%'}}>
					<Button onClick={() => this.props.callbackFromParent()} variant="contained" style={{ backgroundColor: green[300]}}>
						{this.props.text}
					</Button>
				</div>
			);
		} else if (this.props.type === 'cancel') {
			return (
				<div>
					<Button variant="contained" style={{ backgroundColor: 'rgba(238, 21, 21, 0.8)' }}>
						{this.props.text}
					</Button>
				</div>
			);
		}
	}
}

export default FPIButton;