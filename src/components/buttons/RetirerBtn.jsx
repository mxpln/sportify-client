import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const IconLabelButtons= ({clbk}) => {
  const classes = useStyles();

  return (
    <div>
     
      
      <Button
        variant="outlined"
        color="secondary"
        className={"btn-recherche-style-add"}
        onClick={clbk}
        // fullWidth={<AddIcon>Add</AddIcon>}
      >
        <RemoveIcon></RemoveIcon>
      </Button>
      
    </div>
  );
}

export default IconLabelButtons;