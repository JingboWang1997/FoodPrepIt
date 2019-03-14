import React from 'react';
import GridList from '@material-ui/core/GridList';
import FPICard from './fpicard';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// grid list (will be deprecated)

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

export default class FoodGridView extends React.Component {
	handleClick(key) {
		console.log('clicked: ' + key);
	}

	render() {
		// if no data is fetched yet, use empty list
		const data = this.props.data == null ? [] : this.props.data;
		let counter_id = 0;
		return (
			<div className={styles.root}>
				<GridList cellHeight={500} spacing={20} className={styles.gridList}>
					{data.map(tile => (
						<FPICard tile={tile} key={counter_id} counter_id={counter_id++} callbackFromParent={this.props.callbackFromParent}/>
						// <GridListTile 
						// 	cols={0.5} 
						// 	rows={0.5}>
						// 	<img src={tile.image} alt={tile.title} />
						// 	<GridListTileBar
						// 		title={tile.title}
						// 		titlePosition="top"
						// 		className={styles.titleBar}
						// 	/>
						// </GridListTile>
					))}
				</GridList>
			</div>
		);
	}
}