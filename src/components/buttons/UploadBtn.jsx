import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { objectToFormData } from "object-to-formdata";
import red from '@material-ui/core/colors/red';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

class UploadButtons extends Component {
  // const classes = useStyles();
state={
  image:"",
}




  render(){
    // console.log(this.state)
  return (
    <div >
      <input
        accept="image/*"
        style={{display: "none"}}
        // className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e, v)=>this.props.change(e, v)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" startIcon={<CloudUploadIcon />} component="span" onClick={(e, v)=>this.props.click(e, v)} >
          Upload
        </Button>
      </label>
    </div>
  );
  }
}

export default UploadButtons;