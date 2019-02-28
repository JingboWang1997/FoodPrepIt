import React, { Component } from 'react';
import FPISearchbar from '../components/fpisearchbar_component'
import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPIDropdown from '../components/fpidropdown_component'


class MainSearchView extends Component {
  render() {
    return (
      <div>
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