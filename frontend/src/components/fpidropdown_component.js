import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    dietaryRestriction: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="dietary-restriction-select"></InputLabel>
          <h5>Dietary Restriction: </h5>
          <Select
            value={this.state.dietaryRestriction}
            onChange={this.handleChange}
            inputProps={{
              name: 'dietaryRestriction',
              id: 'dietary-restriction-select',
            }}
          >
            <MenuItem value={'none'}>None</MenuItem>
            <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
            <MenuItem value={'vegan'}>Vegan</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);