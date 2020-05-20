import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Burger from './buttons/Burger';

// import "../styles/NavMain.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavMain = (props) => {
  const { context } = props;

  // function handleLogout(){

  //   console.log("click")
  //   // apiHandler
  //   //   .logout()
  //   //   .then(() => {
  //   //     context.removeUser();
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // }

  

  const classes = useStyles();
  
  return (
    // <nav className="NavMain">
    //   <NavLink exact to="/">
    //     <h3 className="logo">App name</h3>
    //   </NavLink>
    //   <ul className="nav-list">
    //     {context.isLoggedIn && (
    //       <React.Fragment>
    //         <li>
    //           <NavLink to="/profile">
    //             {context.user && context.user.email}
    //           </NavLink>
    //         </li>
    //         <li>
    //           <p onClick={handleLogout}>Logout</p>
    //         </li>
    //       </React.Fragment>
    //     )}
    //     {!context.isLoggedIn && (
    //       <React.Fragment>
    //         <li>
    //           <NavLink to="/signin">Log in</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/signup">Create account</NavLink>
    //         </li>
    //       </React.Fragment>
    //     )}
    //   </ul>
    // </nav>


 <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

        <Typography variant="h6" className={classes.title}>
        <NavLink exact to="/">
         <h3 className="logo">sportufy</h3>
      </NavLink>
          </Typography>

       

          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

         
         <Burger />
        




          </IconButton>

        </Toolbar>
        
      </AppBar>
    </div>

  );
};

export default withUser(NavMain);
