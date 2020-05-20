import React from 'react';
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
   

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Match de foot entre..."
        subheader="10:30"
      />

<NavLink exact to="/OneEventId">
      <CardMedia
        // className={classes.media}
        className="card-image"
        image="/media/not-found.png"
        title="Paella dish"
      />

</NavLink>
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Venez faire un match de street foot les potos ca va être super et même peut être y aura des zouz
        </Typography>
      </CardContent> */}

    

     

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