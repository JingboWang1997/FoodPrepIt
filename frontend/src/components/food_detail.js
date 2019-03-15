import React from 'react';

// display the page with food details on a user selected food
export default class FoodDetail extends React.Component {
	constructor(props) {
		super(props);
    
		// this.state = {
		// 	data: null
		// };
	}

	componentDidMount() {
		// make keyword search call
		// const keywords = this.props.userInput;
		// console.log('fetching data with keywords: ' + keywords);
		// fetch('http://127.0.0.1:8000/getDishByKeywords', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		keywords
		// 	}),
		// }).then(response => {
		// 	console.log(response);
		// 	return response.json();
		// })
		// 	.then(data => {
		// 		this.setState({ 
		// 			data: data
		// 		});
		// 		console.log(this.state);
		// 	});
	}
    
	render() {
		return (
			<div>
				<h1>{this.props.data.title}</h1>
				<h1>{this.props.data.sourceAPI}</h1>
				<h1>time</h1>
				<h1>ingredient</h1>
				<h1>instruction</h1>
			</div> 
		);
	}
}