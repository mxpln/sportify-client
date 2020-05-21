import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  fullWidth: true,
}));

const IconLabelButtons = ({ clbk }) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={"btn-recherche-style"}
        onClick={clbk}
        // endIcon={<AddIcon>Add</AddIcon>}
      >
        Changer vue
      </Button>
    </div>
  );
};

export default IconLabelButtons;
