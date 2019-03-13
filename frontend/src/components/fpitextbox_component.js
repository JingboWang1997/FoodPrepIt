import { Component } from 'react';
// import { Button } from 'reactstrap';

class FPIButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Button variant="success">{this.props.text}</Button>
			</div>
		);
	}
}

export default FPIButton;