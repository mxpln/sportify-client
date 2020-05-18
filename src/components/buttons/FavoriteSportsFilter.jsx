import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



const CheckboxLabels = ({parentCallback}) => {

  const [selectedSwitch, setSwitch] = React.useState(false);

const handleChange = () => {
  if (selectedSwitch===false){
    const newValue=true;
    setSwitch(newValue);
    parentCallback(newValue);}

  else if (selectedSwitch===true){
    const newValue=false;
    setSwitch(newValue);
    parentCallback(newValue);}
}

  return (
      <>
      <h6>Sports favoris</h6>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label=""
        onClick={handleChange}
      />
 </>
  );
}

export default CheckboxLabels;