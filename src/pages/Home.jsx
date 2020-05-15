import React from "react";
import { Button } from "@material-ui/core";
import Search from "../components/buttons/Search"
import DatePicker from "../components/buttons/DatePicker";
import Level from "../components/buttons/Level";
import TeamSelector from "../components/buttons/TeamSelector";
import FavoriteSportsFilter from "../components/buttons/FavoriteSportsFilter";
import MyMap from "../components/buttons/MyMap";
import Toggle from "../components/buttons/Toggle"
import ViewsFilter from "../components/buttons/ViewsFilter"



const Home = (props) => {
  return (
    <div>
    
<div className="search-bar-home">
      <Search />
      <DatePicker />
      <Level />
      <TeamSelector />
      <FavoriteSportsFilter />

      <div className="test-mathias">
      <Toggle />
      
      <MyMap />
      </div>

    

    
     
      
      
    
    
      
      </div>
    </div>
  );
};

export default Home;
