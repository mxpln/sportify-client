import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Search from "../buttons/Search";
import DatePicker from "../buttons/DatePicker";
import Level from "../buttons/Level";
import TeamSelector from "../buttons/TeamSelector";
import FavoriteSportsFilter from "../buttons/FavoriteSportsFilter";
import MyMap from "../buttons/MyMap";
import Card from "../buttons/Card";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import SubmitBtn from "../buttons/SubmitBtn";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className="">
      <ExpansionPanel>

      
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<>
<div className="search-bar-home">
        {/* <div className="change-view-container">
          <button onClick={this.toggle}>Changer vue</button>
        </div> */}
          <div className="flex-between">
            <div className="margin-general">
              <Search />
            </div>
            <div className="margin-general">
              <DatePicker
                // endDate={this.handleEndDate}
                // startDate={this.handleStartDate}
              />
            </div>
          </div>

         

          <div>
         
            <SubmitBtn />
        
          </div>
          </div>

</>




          {/* <Typography className={classes.heading}>Expansion Panel 1</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className="flex-between">
            {/* <button>Filters</button> */}
            <div className="margin-general"> <Level  /></div>
            <div className="margin-general"><TeamSelector  /></div>
            <div className="margin-general"> <FavoriteSportsFilter  /></div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

     

     
    </div>
  );
}