import React, { Component } from 'react';

import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPIDropdown from '../components/fpidropdown_component'
import FPIButton from '../components/fpibutton_component'
import logo from '../resources/logo.jpg';
import FoodDisplay from './food_display';

import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
// import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey'

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[400],
    },
    marginLeft: 100,
    width: '80%',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

function FPISearchbar(props) {
  const { classes } = props;
  return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          value={props.input}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>

  );
}

class MainSearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      searched: false
    };
  }

  myCallback = () => {
    this.setState({ searched: true });
  }

  render() {
    const { classes } = this.props;
    if (!this.state.searched) {
      return (
        <div style={{marginTop: '5%'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={logo}/>
            <div style={{display: 'flex', flexDirection: 'row', width:'50%', alignItems: 'center'}}>
              
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  value={this.state.userInput}
                  onChange={(e) => this.setState({ userInput: e.target.value })}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>

              <FPIButton text={"Search"} type={"confirm"} callbackFromParent={this.myCallback}/>
            </div>
            <FPISlider value={2}/>
            <FPISlider value={1}/>
            <FPISlider />
            <FPITaginput />
            <FPIDropdown />
          </div>
        </div>
      );
    } else {
      return (
        <FoodDisplay userInput={this.state.userInput}/>
      );
    }
  }
}

export default withStyles(styles)(MainSearchView);