import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const IconLabelButtons = ({clbk}) => {
  const classes = useStyles();



  return (
    <div>
     
      
      <Button
        variant="outlined"
        color="primary"
        padding="100px"
        // className={"return-btn"}
        // endIcon={<SendIcon>Envoyer</SendIcon>}
        onClick={clbk}
        startIcon={<ArrowBackIcon />}
      >
        Retour
      </Button>
      
    </div>
  );
}

export default IconLabelButtons;