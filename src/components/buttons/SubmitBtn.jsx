import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
     
      
      <Button
        variant="contained"
        color="primary"
        padding="100px"
        className={classes.button}
        endIcon={<SendIcon>Envoyer</SendIcon>}
      >
        Envoyer
      </Button>
      
    </div>
  );
}