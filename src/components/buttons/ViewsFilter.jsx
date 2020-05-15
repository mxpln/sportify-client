import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "./Card";



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
    'aria-controls': `simple-tabpanel-${index}`,
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
          <Tab  label="mes évenements" {...a11yProps(0)} />
          <Tab label="Mes participations" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

      <div>
      <h2>Lundi 17 Mai 2020</h2>
      
      <div className="flex-card">
        <Card />
        <Card />
        <Card />
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
   
      <div>
      <h2>Mardi 18 Mai 2020</h2>
      
      <div className="flex-card">
        <Card />
        <Card />
      
        </div>
        </div>
        
      </TabPanel>
     
    </div>
  );
}