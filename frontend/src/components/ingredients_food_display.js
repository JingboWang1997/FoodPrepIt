import React from 'react';
// ui import
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// css styles
const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	titleBar: {
		background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
});

// display the grid view of food cards 
export default class IngredientsFoodDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.foodList,
			ids: [],
			tiles: []
		};
	}

	// right after component mounting
	componentDidMount() {
		if (!this.state.data) {
			if (!this.props.useFilter) {
				const dietRestriction = '';
				const excludedIngredients = '';
				const budget = '';
				const prepTime = '';
				const calorieLimit = '';
				// make keyword search call
				const ingredients = this.props.userInput;
				console.log('fetching data with ingredients: ' + ingredients);
				fetch('http://127.0.0.1:8000/getDishFromIngredients', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						ingredients, dietRestriction, excludedIngredients, budget, prepTime, calorieLimit
					}),
				}).then(response => {
					console.log('fetched data: ' + response);
					return response.json();
				}).then(data => {
					this.setState({ 
						data: data
					});
					this.generateList();
					this.props.updateFoodList(data);
				});
			} else {
				const dietRestriction = this.props.dietaryRestriction === 'none' || this.props.dietaryRestriction === '' ? '' : this.props.dietaryRestriction;
				let ingredientString = '';
    			this.props.exclusionTags.map((item) =>
					ingredientString += item['text']+','
    			);
				const excludedIngredients = this.props.exclusionTags.length === 0 ? '' : ingredientString;
				const budget = '';
				const prepTime = this.props.time;
				const calorieLimit = this.props.calorie;
				// make keyword search call
				const ingredients = this.props.userInput;
				console.log('fetching data with ingredients: ' + ingredients);
				fetch('http://127.0.0.1:8000/getDishFromIngredients', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						ingredients, dietRestriction, excludedIngredients, budget, prepTime, calorieLimit
					}),
				}).then(response => {
					console.log('fetched data: ' + response);
					return response.json();
				}).then(data => {
					this.setState({ 
						data: data
					});
					this.generateList();
					this.props.updateFoodList(data);
				});
			}
		} else {
			this.generateList();
		}
	}

	// for each food card click
	// index is the corresponding item in the two state arrays:
	//     some uses ids to retrieve detail information
	//     some uses information in the data for details
	handleClick(index) {
		console.log('clicked: ' + this.state.ids[index]);
		this.props.callbackFromParent(this.state.data[index]);
	}

	// called in componentDidMount, after the data is retrieved
	generateList() {
		// if no data is fetched yet, use empty list
		// once there is data, state will be changed and component rerendered
		const data = this.state.data == null ? [] : this.state.data;
		let tiles = [];
		let ids = [];
		let counter_id = 0;

		for (let i = 0; i < data.length; i++) { 
			const tile = data[i];
			tiles.push(
				<GridListTile 
					onClick={() => {
						this.handleClick(i);
					}}
					cols={0.5} 
					rows={0.5}>
					<img src={tile.image} alt={tile.title} />
					<GridListTileBar
						title={tile.title}
						titlePosition="top"
						className={styles.titleBar} />
				</GridListTile>
			);
			if (Number(tile.id) !== -1) {
				ids.push(tile.id);
			} else {
				ids.push(tile.sourceAPI + counter_id++);
			}
		}
		if (tiles.length === 0) {
			tiles = <h1>No Result!</h1>;
		}
		this.setState({ 
			ids: ids,
			tiles: tiles
		});
	}

	render() {
		return (
			<div className={styles.root}>
				<GridList cellHeight={500} spacing={20} className={styles.gridList}>
					{this.state.tiles}
				</GridList>
			</div>
		);
	}
}