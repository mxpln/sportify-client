import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import UserContext from "../Auth/UserContext";
import { withUser } from "../Auth/withUser";

import { NavLink } from "react-router-dom";

// ICONS
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckIcon from "@material-ui/icons/Check";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import apiHandler from "../../api/apiHandler";
import ConsumingContext from "../Auth/ConsumingContext";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const SwipeableTemporaryDrawer = (props) => {
  const { context } = props;

  function handleLogout() {
    console.log("logout");
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // if (context.user === null) {
  //   return null;
  // }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="profile-container-burger">
        {context.isLoggedIn && (
          <img src={context.user.image} className="img-container-burger"></img>
        )}
        {!context.isLoggedIn && (
          <img
            src="/media/standard_profile.png"
            className="img-container-burger"
          ></img>
        )}

        <div className="title-container-burger">
          {/* <ConsumingContext /> */}

          {context.isLoggedIn && <h3>{context.user.firstName}</h3>}
          {!context.isLoggedIn && <h3></h3>}
        </div>
      </div>

      <div className="divider-section">
        <Divider />
      </div>

      <div className="menu-list">
        <NavLink exact to="/">
          <List>
            <ListItem>
              <ListItemIcon>
                <HomeIcon color="primary"/>
              </ListItemIcon>
              <ListItemText className="text-list black-font">Accueil</ListItemText>
            </ListItem>
          </List>
        </NavLink>
      </div>
      {context.isLoggedIn && (
        <div className="menu-list">
          <NavLink exact to="/profile">
            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon color="primary"/>
                </ListItemIcon>
                <ListItemText className="text-list black-font">Mon profil</ListItemText>
              </ListItem>
            </List>
          </NavLink>
        </div>
      )}
      {context.isLoggedIn && (
        <div className="menu-list">
          <NavLink exact to="/createEvent">
            <List>
              <ListItem>
                <ListItemIcon>
                  <AddIcon color="primary" />
                </ListItemIcon>
                <ListItemText className="text-list black-font">
                  Créer évenement
                </ListItemText>
              </ListItem>
            </List>
          </NavLink>
        </div>
      )}

   
      {context.isLoggedIn && (
        <div className="menu-list">
          <NavLink exact to="/myEvents">
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                <ListItemText className="text-list black-font ">
                  Mes évenements
                </ListItemText>
              </ListItem>
            </List>
          </NavLink>
        </div>
      )}
      <div className="divider-section">
        <Divider />
      </div>
      {!context.isLoggedIn && (
        <div className="menu-list color-menu-icon-inscription margin-burger">
          <NavLink exact to="/signup">
            <List>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="text-list">Inscription</ListItemText>
              </ListItem>
            </List>
          </NavLink>
        </div>
      )}


      {!context.isLoggedIn && (

        
        <div className="menu-list color-menu-icon-connexion">
          <NavLink exact to="/signin">
            <List>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText className="text-list">Connexion</ListItemText>
              </ListItem>
            </List>
          </NavLink>
        </div>
      )}

      {context.isLoggedIn && (
        <div className="menu-list color-menu-icon-deconnexion">
          {" "}
          <NavLink exact to="/" onClick={handleLogout}>
            <List>
              {" "}
              <ListItem >
                <ListItemIcon>
                  {/* <ExitToAppIcon /> */}
                </ListItemIcon>
                <ListItemText className="text-list">Déconnexion</ListItemText>
              </ListItem>{" "}
            </List>
          </NavLink>
        </div>
      )}
    </div>
    
  );



  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default withUser(SwipeableTemporaryDrawer);
