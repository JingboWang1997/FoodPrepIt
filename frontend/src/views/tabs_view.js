import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';

import FPIButton from '../components/fpibutton_component';
import MainSearchView from './mainsearch_view'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

function DisplayPage(props) {
    if (props.value === 0) {
        return <FPIButton type="confirm" text="dashboard"/>
    } else if (props.value === 1) {
        return <MainSearchView />
    } else if (props.value === 2) {
        return <MainSearchView />
    } else if (props.value === 3) {
        return <FPIButton type="cancel" text="nutrient check"/>
    }
}

export default class FPITabsView extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <NoSsr>
        <div>
          <AppBar position="static" style={{ backgroundColor: green[300] }}>
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="Dashboard" href="page1" />
              <LinkTab label="Keyword Search" href="page2" />
              <LinkTab label="Ingredient Search" href="page3" />
              <LinkTab label="Nutrient Check" href="page4" />
            </Tabs>
          </AppBar>
          <DisplayPage value={value}/>
          {/* {value === 0 && <TabContainer>Dashboard</TabContainer>}
          {value === 1 && <TabContainer>Keyword Search</TabContainer>}
          {value === 2 && <TabContainer>Ingredient Search</TabContainer>}
          {value === 3 && <TabContainer>Nutrient Check</TabContainer>} */}
        </div>
      </NoSsr>
    );
  }
}

FPITabsView.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(FPITabs);