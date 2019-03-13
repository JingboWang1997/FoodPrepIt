import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from '../resources/food_data.json';

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
	render() {
		const data = this.props.data == null ? [] : this.props.data;
		return (
			<div className={styles.root}>
				<GridList cellHeight={500} spacing={20} className={styles.gridList}>
					{data.map(tile => (
						<GridListTile key={tile.image} cols={0.5} rows={0.5}>
							<img src={tile.image} alt={tile.title} />
							<GridListTileBar
								title={tile.title}
								titlePosition="top"
								className={styles.titleBar}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		);
	}
}