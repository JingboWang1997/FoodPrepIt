import React from 'react';

import FoodGridView from './grid_view';
import AfterSearchView from './aftersearch_view';

export default class FoodDisplay extends React.Component {

	constructor(props) {
		super(props);
    
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		const keywords = this.props.userInput;
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
			console.log(response);
			return response.json();
		})
			.then(data => {
				this.setState({ 
					data: data
				});
				console.log(this.state);
			});
	}

	render() {
		return (
			<FoodGridView data={this.state.data}/>
		);
	}
}