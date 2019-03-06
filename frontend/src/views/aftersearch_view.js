import React, { Component } from 'react';

import FPISearchbar from '../components/fpisearchbar_component'
import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPIDropdown from '../components/fpidropdown_component'
import logo_small from '../resources/logo_small.jpg';
import green from '@material-ui/core/colors/green';



class AfterSearchView extends Component {
  render() {
    // let height = window.innerHeight + 'px';
    // console.log(height);

    return (


      // <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: window.innerHeight - 300 + 'px'}}>
        // {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> */}
        <div style={{marginTop: '1%'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={logo_small}/>
            <div style={{marginTop: '1%', width:'100%'}}>
              <FPISearchbar />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <FPISlider value={2}/>
            <FPISlider value={1}/>
            <FPISlider />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <FPITaginput />
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4%'}}>
              <FPIDropdown />
            </div>
          </div>
        </div>


    );
  }
}

export default AfterSearchView;
