import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../resources/logo.jpg';

// const mainStyle = {
//   margin: 'auto'
// };

class MainSearchView extends Component {
  render() {
    // let height = window.innerHeight + 'px';
    // console.log(height);

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: window.innerHeight - 300 + 'px'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <img src={logo}/>
        </div>
      </div>
    );
  }
}

export default MainSearchView;