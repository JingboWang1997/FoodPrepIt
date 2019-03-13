import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const cardStyle = {
    maxWidth: 400,
};

const mediaStyle = {
    height: 0,
    paddingTop: '56.25%', // 16:9
};

export default class FPICard extends React.Component {
  render() {
    return (
      <Card style = {cardStyle}>
        <CardHeader
          title={this.props.title}
        />
        <CardMedia
          style = {mediaStyle}
          image = {this.props.image}
        />
      </Card>
    );
  }
}