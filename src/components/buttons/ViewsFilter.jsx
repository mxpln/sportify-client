import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import ViewEventBtn from "../buttons/ViewEventBtn"
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";




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

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className="app-bar"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          centered
        >
          <Tab label="mes évenements" {...a11yProps(0)} />
          <Tab label="Mes participations" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <TabPanel value={value} index={0}>
            <h2>INFOS PREMIERE PAGE ICI</h2>

            <Grid container spacing={2}>
           


              <Grid item xs={12} sm={6} md={4}>


              <Card>
                        <CardHeader
                          avatar={<Avatar aria-label="recipe">R</Avatar>}
                          // title={item.title}
                          subheader={
                            <Moment format="DD MMM YYYY - HH:mm">
                              {/* {item.date} */}
                            </Moment>
                          }
                        />
                        {/* <NavLink exact to={`/OneEvent/${item._id}`}> */}
                          <CardMedia
                            // className={classes.media}
                            className="card-image"
                            // image={item.image}
                            title="Event"
                          />
                        {/* </NavLink> */}
                        <div className="card-container-bottom">
                          <div className="avatar-group">
                         <h1>PREMIERE CARTE</h1>
                          </div>

                          <div className="avatar-group-btn">
                       
                            {/* <NavLink exact to={`/OneEvent/${item._id}`}> */}
                            <ViewEventBtn />
                            {/* </NavLink> */}
                         
                         
                          </div>
                        </div>
                      </Card>


              </Grid>
            </Grid>

         
          </TabPanel>
        </Container>
      </React.Fragment>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <TabPanel value={value} index={1}>
            <h2>INFOOOOS DEUXIEME PAGE ICI</h2>

            <Grid container spacing={2}>
             


              <Grid item xs={12} sm={6} md={4}>

              {/* <Card key={index}> */}
              <Card>
                        <CardHeader
                          avatar={<Avatar aria-label="recipe">R</Avatar>}
                          // title={item.title}
                          subheader={
                            <Moment format="DD MMM YYYY - HH:mm">
                              {/* {item.date} */}
                            </Moment>
                          }
                        />
                            <h1>DEUXIEME CARTE</h1>
                        {/* <NavLink exact to={`/OneEvent/${item._id}`}> */}
                          <CardMedia
                            // className={classes.media}
                            className="card-image"
                            // image={item.image}
                            title="Event"
                          />
                        {/* </NavLink> */}
                        <div className="card-container-bottom">
                          <div className="avatar-group">
                         
                          </div>

                          <div className="avatar-group-btn">
                       
                            {/* <NavLink exact to={`/OneEvent/${item._id}`}> */}
                            <ViewEventBtn />
                            {/* </NavLink> */}
                         
                         
                          </div>
                        </div>
                      </Card>



                
              </Grid>
            </Grid>
          </TabPanel>
        </Container>
      </React.Fragment>
    </div>
  );
}
