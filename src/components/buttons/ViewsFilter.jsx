import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../Auth/UserContext";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import ViewEventBtn from "../buttons/ViewEventBtn";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";
import apiHandler from "../../api/apiHandler";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

class CenteredTabs extends Component {
  static contextType = UserContext;
  state = {
    myEvents: true,
    myParticipations: false,
    event: [],
  };

  handleTabOne = (event, newValue) => {
    this.setState({
      myEvents: true,
      myParticipations: false,
    });
    console.log("click Mes events");
  };
  handleTabTwo = (event, newValue) => {
    this.setState({
      myEvents: false,
      myParticipations: true,
    });
    console.log("click Mes participations");
  };

  componentDidMount() {
    apiHandler
      .getEvents()
      .then((data) => {
        console.log("data------->", data);
        console.log("id------->", data._id);

        this.setState({
          event: data.events,
          userId: data._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.context.user === null) {
      return null;
    }
    console.log("STATE", this.state);
    const test = this.state.event;
    const theID = this.state.userId;
    // const res = test.map((item, index) => {
    //   return item.creator;
    // });
    const resOne = test.map((i)=>{if(i.creator === theID){return i} });
    const resTwo = test.map((i)=>{if(i.creator !== theID){return i} });
    const mesParticipations = resTwo.filter(function(x){return x !== undefined});
    const mesEvents = resOne.filter(function(x){return x !== undefined});


console.log("mesEvents", mesEvents)
console.log("mesParticipations", mesParticipations)
        

    return (
      <div>
        <AppBar position="static">
          <Tabs
            className="app-bar"
            // value={value}
            // onChange={this.handleChange}

            indicatorColor="primary"
            centered
          >
            <Tab onClick={this.handleTabOne} label="mes évenements" />
            <Tab onClick={this.handleTabTwo} label="Mes participations" />
          </Tabs>
        </AppBar>

        {this.state.myEvents && (
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
         

            <div className="main-container content-position-view">
                <Grid container spacing={2}>
              {mesEvents.map((item, index)=> (


                
                  <Grid item xs={12} sm={6} md={4}>
                  
                    <Card>
               
                      <CardHeader
                        key={index}
                        title={item.title}
                        subheader={
                          <Moment format="DD MMM YYYY - HH:mm">
                            {item.date}
                          </Moment>
                        }
                      />
                      <NavLink exact to={`/OneEvent/${item._id}`}>
                      <CardMedia
                        // className={classes.media}
                        className="card-image"
                        image={item.image}
                        title="Event"
                      />
                      </NavLink>
                      <div className="card-container-bottom">
                        <div className="avatar-group">
                      
                        </div>

                        <div className="avatar-group-btn">
                          <NavLink exact to={`/OneEvent/${item._id}`}>
                          <ViewEventBtn />
                          </NavLink>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                
                ))}
                </Grid>
              </div>
            </Container>
          </React.Fragment>
        )}

        {this.state.myParticipations && (
          
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
            <div className="main-container content-position-view">
 <Grid container spacing={2}>
              {mesParticipations.map((item, index)=> (
             
              

               
                  <Grid item xs={12} sm={6} md={4}>
                  
                    <Card>
                
                      <CardHeader
                        // avatar={<Avatar aria-label="recipe">R</Avatar>}
                        title={item.title}
                        subheader={
                          <Moment format="DD MMM YYYY - HH:mm">
                            {/* {item.date} */}
                          </Moment>
                        }
                      />
                    
                      <NavLink exact to={`/OneEvent/${item._id}`}>
                      <CardMedia
                        // className={classes.media}
                        className="card-image"
                        image={item.image}
                        title="Event"
                      />
                      </NavLink>
                      <div className="card-container-bottom">
                        <div className="avatar-group"></div>

                        <div className="avatar-group-btn">
                          <NavLink exact to={`/OneEvent/${item._id}`}>
                          <ViewEventBtn />
                          </NavLink>
                        </div>
                      </div>
                    </Card>
                  </Grid>
             
                ))}
                   </Grid>
              </div>
              
            </Container>
          </React.Fragment>
          
        )}
        
      </div>
    );
  }
}

export default CenteredTabs;
