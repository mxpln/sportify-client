import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import AvatarGroup from './AvatarGroup'
import AddBtn from './AddBtn'

import RetirerBtn from './RetirerBtn'

import Grid from "@material-ui/core/Grid";

import { NavLink } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    // width: 275,
    maxWidth: 345,
    // margin:"10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

class RecipeReviewCard extends Component {
  
  render() {


  return (
      <>
   

    <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        // title={this.props.title}
        // subheader={this.props.hour}
      />

<NavLink exact to="/OneEventId">
      <CardMedia
        // className={classes.media}
        className="card-image"
        image="/media/not-found.png"
        title="Paella dish"
      />
</NavLink>
      <div className="card-container-bottom">

      <div className="avatar-group">
        <AvatarGroup />
     </div>

     <div className="avatar-group-btn">
        <AddBtn/>
        </div>

        <div className="avatar-group-btn">
        <RetirerBtn/>
        </div>

    </div>


     
    </Card>

    </>
  );
}
}

export default Card;
