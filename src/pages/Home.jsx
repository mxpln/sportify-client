import React from "react";
import { Button } from "@material-ui/core";
import Search from "../components/buttons/Search"
import DatePicker from "../components/buttons/DatePicker";
import Level from "../components/buttons/Level";
import TeamSelector from "../components/buttons/TeamSelector";
import FavoriteSportsFilter from "../components/buttons/FavoriteSportsFilter";




const Home = (props) => {
  return (
    <div>
      <h1>Home Page ∆</h1>
    
<div className="search-bar-home">
      <Search />
      <DatePicker />
      <Level />
      <TeamSelector />
      <FavoriteSportsFilter />
</div>
      

    </div>
  );
};

export default Home;
