import React from 'react';
// react component import
import HistoryFoodDisplay from './history_food_display';
import HistoryFoodDetail from './history_food_detail';

// the dashboard (history view) of the first tab
export default class DashboardView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 'foodData' contains foodData if viewing details
			foodData: null,
		};
	}

	// called when go back from the food detail screen
	exitFoodDetailCallBack = () => {
		this.setState({ 
			foodData: null
		});
	}

	// called when a food card is clicked
	foodDetailCallback = (data) => {
		this.setState({ 
			foodData: data,
		});
	}

	render() {
		// list view
		if (this.state.foodData === null) {
			return (
				<div>
					<h1>History</h1>
					<HistoryFoodDisplay 
						callbackFromParent={this.foodDetailCallback} 
					/>
				</div>
			);
		} else {
			// detail view
			return (
				<div>
					<HistoryFoodDetail
						exitFoodDetailCallBack = {this.exitFoodDetailCallBack}
						data = {this.state.foodData}
					/>
				</div>
			);
		}
	}
}