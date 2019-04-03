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
export default class HistoryFoodDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		// 	ids: [],
		// 	tiles: []
		};
	}

	// right after component mounting
	componentDidMount() {
		console.log('fetching history data');
		fetch('http://127.0.0.1:8000/getHistory', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(response => {
			console.log('fetched data: ' + response);
			return response.json();
		}).then(data => {
			this.setState({ 
				data: data
			});
			this.generateList();
		});
	}

	// for each food card click
	// index is the corresponding item in the two state arrays:
	// some uses ids to retrieve detail information
	// some uses information in the data for details
	handleClick(index) {
		console.log('clicked: ' + this.state.ids[index]);
		this.props.callbackFromParent(this.state.data[index]);
	}

	// called in componentDidMount, after the data is retrieved
	generateList() {
		// if no data is fetched yet, use empty list
		// once there is data, state will be changed and component rerendered
		const data = this.state.data == null ? [] : this.state.data.reverse();
		let ids = [];
		let counter_id = 0;
		let index = 0;
		let curDate = '';
		let tiles = [];
		let display = [];
		for (let index = 0; index <= data.length; index++) {
			if (index === data.length || data[index]['date'] !== curDate) {
				display.push(
					<div>
						<h3>{curDate}</h3>
					</div>
				);
				display.push(
					<GridList cellHeight={500} spacing={20} className={styles.gridList}>
						{tiles}
					</GridList>
				);
				curDate = index === data.length ? '' : data[index]['date'];
				tiles = [];
			} else {
				const tile = data[index];
				const img = tile.image === '' ? 'https://freedesignfile.com/upload/2015/12/Tableware-with-empty-plate-vector-06.jpg' : tile.image;
				tiles.push(
					<GridListTile 
						onClick={() => {
							this.handleClick(index);
						}}
						cols={0.5} 
						rows={0.5}
						key={index}>
					
						<img src={img} alt={tile.title} />
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
		}
        
		if (data.length === 0) {
			display = <h1>No History!</h1>;
		}
		this.setState({ 
			ids: ids,
			tiles: display
		});
	}

	render() {
		return (
			<div className={styles.root}>
				{this.state.tiles}
			</div>
		);
	}
}