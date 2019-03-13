import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

class FPIButton extends Component {
  handleClick() {
    console.log('clicked button');
    console.log(this.props);
    // console.log(callback);
    // this.props.callbackFromParent(true);
    // console.log(this.props.callbackFromParent);
  }

  someFn = () => {
    console.log('clicked button');
    
    this.props.callbackFromParent(1);
  }

  render() {
    console.log(this.props);
    if (this.props.type === "confirm") {
      return (
        <div style={{marginLeft: '2%'}}>
          <Button onClick={this.handleClick} variant="contained" style={{ backgroundColor: green[300]}}>
            {this.props.text}
          </Button>
        </div>
      );
    } else if (this.props.type === "cancel") {
      return (
        <div>
          <Button variant="contained" style={{ backgroundColor: 'rgba(238, 21, 21, 0.8)' }}>
            {this.props.text}
          </Button>
        </div>
      );
    }
  }
}

export default FPIButton;