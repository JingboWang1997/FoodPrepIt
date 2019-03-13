import React, { Component } from 'react';

import FPISearchbar from '../components/fpisearchbar_component'
import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPIDropdown from '../components/fpidropdown_component'
import FPIButton from '../components/fpibutton_component'
import logo from '../resources/logo.jpg';

export default class MainSearchView extends Component {
  render() {
    // let height = window.innerHeight + 'px';
    // console.log(height);
    return (
      <div style={{marginTop: '5%'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={logo}/>
          <div style={{display: 'flex', flexDirection: 'row', width:'50%', alignItems: 'center'}}>
            <FPISearchbar />
            <FPIButton text={"Search"} type={"confirm"} callbackFromParent={this.props.callbackFromParent}/>
          </div>
          <FPISlider value={2}/>
          <FPISlider value={1}/>
          <FPISlider />
          <FPITaginput />
          <FPIDropdown />
        </div>
      </div>
    );
  }
}
