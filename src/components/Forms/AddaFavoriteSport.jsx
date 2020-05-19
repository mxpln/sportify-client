import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Search from "../buttons/Search";
import Level from "../buttons/Level";
import AddBtn from "../buttons/AddBtn";

export default class AddaFavoriteSport extends Component {

    state = {
        preferences:[],
        sport:"",
        level:"beginner",
      };


  handleSearch = (event, value) => {
    let res;
    if (value === null) res = "";
    else {
      res = value;
    }
    this.setState({
      sport: res,
    });
  };

  handleRating = (newValue) => {
    let res;
    if (newValue === null || newValue === 1) {
      res = "beginner";
    } else if (newValue === 2) {
      res = "intermediate";
    } else if (newValue === 3) {
      res = "advanced";
    }
    this.setState({
      level: res,
    });
  };

//   SubmitPref = (event) => {
//       let sport= this.state.sport._id;
//       let level = this.state.level;
//     this.setState({
//         preferences : [{sport, level}]
//     })
//     this.props.callBack
//   };

  render() {
      console.log(this.state.preferences)
    return (
      <>
        <Grid item xs={4}>
          <Search clbk={this.handleSearch} />
        </Grid>

        <Grid item xs={4}>
          <Level ratingValue={this.handleRating} />
        </Grid>

        <Grid item xs={4}>
          <AddBtn clbk={this.SubmitPref} />
        </Grid>
      </>
    );
  }
}
