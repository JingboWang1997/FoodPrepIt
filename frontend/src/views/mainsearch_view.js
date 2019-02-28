import React, { Component } from 'react';

import FPISearchbar from '../components/fpisearchbar_component'
import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPIDropdown from '../components/fpidropdown_component'
import logo from '../resources/logo.jpg';



class MainSearchView extends Component {
  render() {
    // let height = window.innerHeight + 'px';
    // console.log(height);

    return (


      // <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: window.innerHeight - 300 + 'px'}}>
        // {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={logo}/>
          <FPISearchbar />
          <FPISlider />
          <FPISlider />
          <FPISlider />
          <FPITaginput />
          <FPIDropdown />
        </div>


    );
  }
}

export default MainSearchView;
