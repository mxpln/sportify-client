import React, { Component } from "react";
import Search from "../components/buttons/Search";
import DatePicker from "../components/buttons/DatePicker";
import Level from "../components/buttons/Level";
import TeamSelector from "../components/buttons/TeamSelector";
import FavoriteSportsFilter from "../components/buttons/FavoriteSportsFilter";
import MyMap from "../components/buttons/MyMap";
import Card from "../components/buttons/Card";

class Home extends Component {
  state = {
    isSwitchOn: false,
    search: "",
    startDate: "",
    endDate:"",
    level :"",
    team : "",
    favoriteSports: false,
  };

  toggle = () => {
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    });
  };

  handleChange = (event, value) => {
    let res;
    if (value === null) res = "";
    else {
      res = value.title;
    }
    this.setState({
      search: res,
    });
  };

  handleEndDate = (date) => {
   this.setState({
    endDate: date
   })
  };

  handleStartDate = (date) => {
    this.setState({
      startDate: date
     })
  }

  handleRating = (newValue) =>{
    let res;
    if (newValue===null || newValue===1){res="facile"}
    else if (newValue===2) {res="modéré"}
    else if (newValue===3) {res="confirmé"}
    this.setState({
      level : res
    })
  }

  handleTeam = (newValue) => {
    this.setState({
      team: newValue
    })
  }

  handleFavorite = (value) => {
    this.setState({
      favoriteSports: value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="search-bar-home">
          <Search clbk={this.handleChange} />
          <DatePicker endDate={this.handleEndDate} startDate={this.handleStartDate}/>
          <Level ratingValue={this.handleRating} />
          <TeamSelector parentCallback={this.handleTeam} />
          <FavoriteSportsFilter parentCallback={this.handleFavorite}/>
        </div>
        <button onClick={this.toggle}>Changer vue</button>
        <div
          className={
            this.state.isSwitchOn ? "toggleDisplayOff" : "toggleDisplayOn"
          }>
          <MyMap />
        </div>

        <div
          className={
            this.state.isSwitchOn ? "toggleDisplayOn" : "toggleDisplayOff"
          }
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
