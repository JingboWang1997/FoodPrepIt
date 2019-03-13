import React, { Component } from 'react';
// ui import
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey'
// react component import
import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPIDropdown from '../components/fpidropdown_component'
import FPIButton from '../components/fpibutton_component'
import logo from '../resources/logo.jpg';
import FoodDisplay from './food_display';
// resources import
import logo_small from '../resources/logo_small.jpg';
import FoodDetail from './food_detail';

// css definition
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

// the main view of the search portion
class MainSearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      searched: false,
      foodDetail: false,
      loading: false,
    };
  }

  searchButtonCallback = () => {
    if (this.state.userInput !== '') {
      this.setState({ 
        searched: true,
        loading: true
      });
    }
  }

  foodDetailCallback = () => {
    this.setState({ foodDetail: true })
  }

  render() {
    const { classes } = this.props;
    if (!this.state.loading) {
      if (!this.state.searched) {
        // the initial screen with the search bar in the center
        return (
          <div style={{marginTop: '5%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src={logo} alt='logo'/>
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
                <FPIButton text={"Search"} type={"confirm"} callbackFromParent={this.searchButtonCallback}/>
              </div>
              <FPISlider value={2}/>
              <FPISlider value={1}/>
              <FPISlider value={0}/>
              <FPITaginput />
              <FPIDropdown />
            </div>
          </div>
        );
      } else if (!this.state.foodDetail) {
        // the view with the search bar on top of the card view
        return (
          <div>
            {/* after search view */}
            <div style={{marginTop: '1%'}}>
              <div style={{display: 'flex', flexDirection: 'row', width:'90%', alignItems: 'center'}}>
                <img src={logo_small} alt='logo'/>
                <div style={{marginTop: '1%', width:'100%'}}>
                  {/* <FPISearchbar /> */}
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
                </div>
                <FPIButton style={{ marginLeft: '20%'}} text={"Search"} type={"confirm"} callbackFromParent={this.searchButtonCallback}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <FPISlider value={2}/>
                <FPISlider value={1}/>
                <FPISlider value={0}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <FPITaginput />
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4%'}}>
                  <FPIDropdown />
                </div>
              </div>
            </div>
            {/* end of the after search portion */}
            <FoodDisplay userInput={this.state.userInput} callbackFromParent={this.foodDetailCallback}/>
          </div>
        );
      } else {
        return (
          <FoodDetail />
        );
      }
    } else {
      this.setState({ loading: false });
      return (
        <div></div>
      );
    }
  }
}

export default withStyles(styles)(MainSearchView);