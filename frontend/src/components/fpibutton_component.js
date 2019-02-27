import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FPIButton extends Component {
  render() {
    if (this.props.type === "confirm") {
      return (
        <div>
          <Button variant="contained" style={{ backgroundColor: 'rgba(112, 180, 63, 0.7)' }}>
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