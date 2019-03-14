import React from 'react';

export default class LoginView extends React.Component {

	render() {
		const divStyle = {
			position: 'absolute', 
			top: '30%', 
			left: '45%', 
		};

		return (
			<div style={divStyle}>
				<h1> Login </h1>
				<input/><br/>
				<input/><br/>
				<button>1</button>
				<button>2</button>
			</div>
		);
	}

}