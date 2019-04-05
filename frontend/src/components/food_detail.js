import React from 'react';
import Button from '@material-ui/core/Button';
// import nutritionData from '../resources/nutritionData';

// display the page with food details on a user selected food
export default class FoodDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: null,
			source: this.props.data.sourceAPI,
			id: this.props.data.id,
			nutritionData: null,
		};
	}

	componentDidMount() {
		const source = this.state.source;
		const id = this.state.id;
		const img = this.props.data.image;
		const recipeLink = this.props.data.recipeLink;
		const title = this.props.data.title;
		const userid = this.props.userid;
		console.log('displaying food detail: ');
		console.log('source: ' + source);
		console.log('id: ' + id);
		fetch('http://127.0.0.1:8000/getRecipe', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				source, id, img, recipeLink, title, userid
			}),
		}).then(response => {
			return response.json();
		}).then(data => {
			console.log('fetching detailed data: ');
			console.log(data);
			this.setState({ 
				detail: data,
			});
		});
		if (source === 'Spoonacular') {
			fetch('http://127.0.0.1:8000/getNutrition', {
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
				console.log('fetching nutrition data: ');
				console.log(data);
				this.setState({ 
					nutritionData: data, 
				});
			});
		}
		// this.setState({
		// 	nutritionData: nutritionData
		// });
	}

	formatDetails(detailData) {
		let result = null;
		let ingredients = [];
		// format the ingredients into a list
		for (let i = 0; i < detailData.ingredients.length; i++) {
			ingredients.push(<li>{detailData.ingredients[i]}</li>);
		}
		if (detailData.sourceAPI === 'Spoonacular') {
			if (detailData.instruction === null) {
				result =
				<div>
					<h2>Ready In {detailData.readyInMinutes} Minutes</h2>
					<h2>Ingredients</h2>
					<ul>
						{ingredients}
					</ul> 
					<a href={detailData.recipeLink}>View Instruction</a>
				</div>;
			} else{
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
			}
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
				console.log('fetched detailed data: ' + this.state.detail);
				detail = this.formatDetails(this.state.detail);
			}
		}
		let nutrition = <div></div>;
		if (this.state.nutritionData !== null) {
			nutrition = [<h2>Nutrition</h2>];
			for (let i = 0; i < this.state.nutritionData.length; i++) {
				nutrition.push(
					<div>
						<p>{this.state.nutritionData[i].title} : {this.state.nutritionData[i].amount}</p>
					</div>);
			}

		}

		return (
			<div>
				<Button onClick={this.props.exitFoodDetailCallBack} variant="contained">Back</Button>
				<h1>{this.props.data.title}</h1>
				<h2>{this.props.data.sourceAPI}</h2>
				{detail}
				{nutrition}
			</div> 
		);
	}
}