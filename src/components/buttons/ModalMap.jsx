import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from './Card'
import { NavLink } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import AvatarGroup from './AvatarGroup'
import AddBtn from './AddBtn'
import RetirerBtn from './RetirerBtn'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    // width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({test, image, id, date}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

console.log(image)

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {/* <h2 id="simple-modal-title"></h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
      <Card>
                      <CardHeader
                        avatar={<Avatar aria-label="recipe">R</Avatar>}
                        title={test}
                        subheader={
                          // date.slice(11, 16)
                          <p>zkz</p>
                        }
                      />
                      <NavLink exact to={`/OneEvent/${id}`}>
                        <CardMedia
                          // className={classes.media}
                          className="card-image"
                          image={image}
                          title="Paella dish"
                        />
                      </NavLink>
                      <div className="card-container-bottom">
                        <div className="avatar-group">
                          <AvatarGroup />
                        </div>

                        <div className="avatar-group-btn">
                          <AddBtn />
                        </div>

                        <div className="avatar-group-btn">
                          <RetirerBtn />
                        </div>
                      </div>
                    </Card>   


      
      <SimpleModal />
    </div>
  );



  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}