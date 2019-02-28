import React, { Component } from 'react';
import FPIButton from '../components/fpibutton_component'
// import FPITabs from '../components/fpitabs_component'
import FPISearchbar from '../components/fpisearchbar_component'

class ComponentsScreen extends Component {
  render() {
    return (
      <div>
        <h1>componenets</h1>
        <h3>button</h3>
        &lt;FPIButton text=&#123;&quot;text&quot;&#125;/&gt;
        <FPIButton text={"text"} type={"cancel"}/>

        {/* <h3>tabs</h3>
        &lt;FPITabs /&gt;
        <FPITabs /> */}

        <h3>search bar</h3>
        &lt;FPISearchbar /&gt;
        <FPISearchbar />
      </div>
    );
  }
}

export default ComponentsScreen;