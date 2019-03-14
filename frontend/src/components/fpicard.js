import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// a single food card that handles click (will be deprecated)

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

export default class FPICard extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.tile.id == -1) {
			this.state = {
				id: this.props.tile.sourceAPI + this.props.counter_id
			};
		} else {
			this.state = {
				id: this.props.tile.id
			};
		}
	}

	// handleClick() {
	// 	console.log('clicked: ' + this.state.id);
	// }

	render() {
		return (
			<GridListTile
				onClick={() => {
					// const url = '';
					// window.open(url, '_blank');
					this.props.callbackFromParent();
					console.log('clicked: ' + this.state.id);
				}}
				key={this.state.id} 
				cols={0.5} 
				rows={0.5}>
				<img src={this.props.tile.image} alt={this.props.tile.title} />
				<GridListTileBar
					title={this.props.tile.title}
					titlePosition="top"
					className={styles.titleBar}
				/>
			</GridListTile>
		);
	}
}