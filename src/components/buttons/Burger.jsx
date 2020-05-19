import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink } from "react-router-dom";

// ICONS
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

{/* 'Accueil', 'Mon profil', 'Créer évenement', 'Mes évenements', 'Mes participations' */}

    
        {/* <ListItem>
      <ListItemIcon> <InboxIcon /> Accueil</ListItemIcon>
      <ListItemIcon> <InboxIcon /> Mon profil</ListItemIcon>
      <ListItemIcon> <InboxIcon /> Créer évenement</ListItemIcon>
      <ListItemText />
      </ListItem> */}
              {/* <ul>
                  <li>Accueil</li>
                  <li>Mon profil</li>
                  <li>Créer évenement</li>
                  <li>Mes évenements</li>
                  <li>'Mes participations</li>
              </ul> */}

              <div className="profile-container-burger">
                <div className="img-container-burger"></div>
                <div className="title-container-burger"> <h3>Nom Prenom</h3></div>
              </div>

              <div className="divider-section" >  <Divider  /> </div>
           
            
            <div className="menu-list"> <NavLink exact to="/"><List> <ListItem><ListItemIcon><HomeIcon/></ListItemIcon><ListItemText className="text-list">Accueil</ListItemText></ListItem> </List></NavLink></div> 
            <div className="menu-list"> <NavLink exact to="/profile"><List><ListItem><ListItemIcon><PersonIcon/></ListItemIcon><ListItemText className="text-list">Mon profil</ListItemText></ListItem> </List></NavLink></div> 
            <div className="menu-list"> <NavLink exact to="/createEvent"><List> <ListItem><ListItemIcon><AddIcon/></ListItemIcon><ListItemText className="text-list">Créer évenement</ListItemText></ListItem> </List></NavLink></div> 
            <div className="menu-list">  <NavLink exact to="/myEvents"><List> <ListItem><ListItemIcon><CheckIcon/></ListItemIcon><ListItemText className="text-list">Mes évenements</ListItemText></ListItem> </List></NavLink></div> 
            {/* <div className="menu-list">  <NavLink exact to="/"><List>  <listItem><ListItemIcon><HomeIcon/></ListItemIcon><listItemText className="text-list">Mes participations</listItemText></listItem> </List></NavLink></div>  */}
          
            <div className="divider-section" >  <Divider  /> </div>

      {/* <List>
        {['Inscription', 'Connexion', 'Déconnexion'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <div className="menu-list"> <NavLink exact to="/signup"><List> <ListItem><ListItemIcon></ListItemIcon><ListItemText className="text-list">Inscription</ListItemText></ListItem> </List></NavLink></div> 
            <div className="menu-list"> <NavLink exact to="/signin"><List><ListItem><ListItemIcon></ListItemIcon><ListItemText className="text-list">Connexion</ListItemText></ListItem> </List></NavLink></div> 
            <div className="menu-list"> <NavLink exact to="/"><List> <ListItem><ListItemIcon><ExitToAppIcon/></ListItemIcon><ListItemText className="text-list">Déconnexion</ListItemText></ListItem> </List></NavLink></div>  
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
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
}

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