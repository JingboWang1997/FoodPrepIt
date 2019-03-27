import React from 'react';
import Button from '@material-ui/core/Button';

// display the page with food details on a user selected food
export default class FoodDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: null,
			source: this.props.data.sourceAPI,
			id: this.props.data.id
		};
	}

	componentDidMount() {
		if (this.props.data.sourceAPI === 'Spoonacular' || this.props.data.sourceAPI === 'Yummly') {
			const source = this.state.source;
			const id = this.state.id;
			console.log('source: ' + source);
			console.log('id: ' + id);
			fetch('http://127.0.0.1:8000/getRecipe', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					source, id
				}),
			}).then(response => {
				return response.json();
			}).then(data => {
				console.log('fetching data: ' + data);
				this.setState({ detail: data });
			});
		}
	}

	formatDetails(detailData) {
		let result = null;
		let ingredients = [];
		console.log(detailData);
		for (let i = 0; i < detailData.ingredients.length; i++) {
			ingredients.push(<li>{detailData.ingredients[i]}</li>);
		}

		if (detailData.sourceAPI === 'Spoonacular') {
			result =
				<div>
					<h2>Ready In {detailData.readyInMinutes} Minutes</h2>
					<h2>Ingredients</h2>
					<ul>
						{ingredients}
					</ul> 
					<h2>Instruction</h2>
					<p>{detailData.instruction}</p>
				</div>;
		} else {
			result =
				<div>
					<h2>Ready In {detailData.readyInMinutes} Minutes</h2>
					<h2>Ingredients</h2>
					<ul>
						{ingredients}
					</ul>
					<a href={detailData.recipeLink}>View Instruction</a>
				</div>;
		}
		return result;
	}
    
	render() {
		let detail = null;
		if (this.props.data.sourceAPI === 'Puppy' || this.props.data.sourceAPI === 'Edamam') {
			detail = <a href={this.props.data.recipeLink}>View Details</a>;
		} else {
			if (this.state.detail === null) {
				detail = <div></div>;
			}
			else {
				console.log('fetchedData: ' + this.state.detail);
				detail = this.formatDetails(this.state.detail);
			}
		}
		return (
			<div>
				<Button onClick={this.props.exitFoodDetailCallBack} variant="contained">Back</Button>
				<h1>{this.props.data.title}</h1>
				<h2>{this.props.data.sourceAPI}</h2>
				{detail}
			</div> 
		);
	}
}