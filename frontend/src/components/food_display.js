import React from 'react';
// import components
import FoodGridView from './grid_view';

// display the grid view of food cards 
export default class FoodDisplay extends React.Component {

	constructor(props) {
		super(props);
    
		this.state = {
			data: null
		};
	}

	// after component mounting
	componentDidMount() {
		// make keyword search call
		const keywords = this.props.userInput;
		console.log('fetching data with keywords: ' + keywords);
		fetch('http://127.0.0.1:8000/getDishByKeywords', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				keywords
			}),
		}).then(response => {
			console.log('fetched data: ' + response);
			return response.json();
		}).then(data => {
			this.setState({ 
				data: data
			});
		});
	}

	render() {
		return (
			<FoodGridView data={this.state.data} callbackFromParent={this.props.callbackFromParent}/>
		);
	}
}