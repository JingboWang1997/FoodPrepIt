import React, { Component } from 'react';
import FPIButton from '../components/fpibutton_component'

// import FPITabs from '../components/fpitabs_component'
import FPISlider from '../components/fpislider_component'
import FPITaginput from '../components/fpitaginput_component'
import FPISearchbar from '../components/fpisearchbar_component'
import FPICard from '../components/fpicard'


class ComponentsScreen extends Component {
  render() {
    return (
      <div>
        <h1>componenets</h1>
        <FPISlider />
        <FPITaginput />
        <h3>button</h3>
        &lt;FPIButton text=&#123;&quot;text&quot;&#125;/&gt;
        <FPIButton text={"text"} type={"cancel"}/>

        <h3>search bar</h3>
        &lt;FPISearchbar /&gt;
        <FPISearchbar />

        <h3>card</h3>
        &lt;FPICard title=&#123;&quot;title&quot;&#125; image=&#123;&quot;image&quot;&#125;/&gt;
        <FPICard title='Food' image='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
      </div>
    );
  }
}

export default ComponentsScreen;