import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

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
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root} style={{marginLeft: '2%', marginLeft: '2%'}}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={6}
          step={1}
          onChange={this.handleChange}
        />{value}
      </div>
    );
  }
}

FPISlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FPISlider);