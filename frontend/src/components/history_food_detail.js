import React from 'react';
import Button from '@material-ui/core/Button';

// display the page with food details on a user selected food
export default class HistoryFoodDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: this.props.data
		};
	}
    
	formatDetails(detailData) {
		let result = null;
		let ingredients = [];
		let ingredientData = detailData.ingredients.substring(2, detailData.ingredients.length-2);
		let ingredientList = ingredientData.split('\', \'');

		for (let i = 0; i < ingredientList.length; i++) {
			ingredients.push(<li>{ingredientList[i]}</li>);
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
			detail = this.formatDetails(this.state.detail);
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