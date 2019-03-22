import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
// slider selector (may be deprecated)

const styles = {
	root: {
		width: 300,
	},
	slider: {
		padding: '22px 0px',
	},
};

class FPISlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value,
		};
    this.name = {
      name: props.name,
    };
	}

  handleChange = (event, value) => {
  	this.setState({ value });
  };

  render() {
  	const { classes } = this.props;
  	const { value } = this.state;
    const { name } = this.name;

  	return (
  		<div className={classes.root} style={{marginLeft: '2%'}}>
  			{name}: {value}
        <Slider
  				classes={{ container: classes.slider }}
  				value={value}
  				min={0}
  				max={6}
  				step={1}
  				onChange={this.handleChange}
  			/>
  		</div>
  	);
  }
}

export default withStyles(styles)(FPISlider);