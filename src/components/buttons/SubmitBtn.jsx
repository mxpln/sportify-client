import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import SendIcon from '@material-ui/icons/Send';

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
        variant="contained"
        color="primary"
        padding="100px"
        className={"btn-recherche-style"}
        // endIcon={<SendIcon>Envoyer</SendIcon>}
        onClick={clbk}
      >
        Valider
      </Button>
      
    </div>
  );
}

export default IconLabelButtons;