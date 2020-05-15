// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Card from "./Card";
// import MyMap from './MyMap';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={2}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// export default function CenteredTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//       <Tabs
//         className="app-bar"
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         centered
//       >
//           <Tab  label="mes évenements" {...a11yProps(0)} />
//           <Tab label="Mes participations" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>

//       <TabPanel value={value} index={0}>

//         <MyMap />
//         </TabPanel>

//       <TabPanel value={value} index={1}>

//       <div>
//       <h2>Mardi 18 Mai 2020</h2>

//       <div className="flex-card">
//         <Card />
//         <Card />

//         </div>
//         </div>

//       </TabPanel>

//     </div>
//   );
// }

// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import NavMain from "../NavMain";

// const useStyles = makeStyles({
//   list: {
//     width: '100vw',
//   },
//   fullList: {
//     width: 'auto',
//     height:'60vh',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
// <NavMain />
//       <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>TOGGLE</button>
        {this.state.on && <h1>toggle is herre</h1>}
      </div>
    );
  }
}
