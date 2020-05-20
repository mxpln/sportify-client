import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import apiHandler from "../../api/apiHandler";
import AvatarGroup from "./AvatarGroup";
import RemoveBtn from "./RemoveBtn";

import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import LevelTwo from "../buttons/LevelTwo";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  controls: {
    display: "flex",
    alignItems: "right",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

class RecipeReviewCard extends Component {
  // handleDelete = (id) => {
  //   apiHandler
  //     .patch(`/api/user/sports/${id}`)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(id);
  //   console.log("deleting card");
  // };
  render() {
    let res;
    let level = "";
    if (this.props.level === "beginner") (res = 1) && (level = "débutant");
    else if (this.props.level === "intermediate")
      (res = 2) && (level = "intermédiaire");
    else if (this.props.level === "advanced") (res = 3) && (level = "avancé");

    return (
      <>
        <Card>
          <div className="card-margin">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <h2>{this.props.name}</h2>
              </Grid>

              <Grid item xs={6}>
                <LevelTwo res={res} level={level} />
              </Grid>

              <Grid item xs={6}>
                {/* <button onClick={() => this.handleDelete(this.props.id)}>
                  Delete
                </button> */}
                <button
                  onClick={() => this.handleDelete(this.props.id)}
                  className="removeButtonhandler"
                >
                  {/* <RemoveBtn />{" "} */}
                </button>
                {/* <RemoveBtn /> */}
              </Grid>
            </Grid>
          </div>
        </Card>
      </>
    );
  }
}

export default RecipeReviewCard;
