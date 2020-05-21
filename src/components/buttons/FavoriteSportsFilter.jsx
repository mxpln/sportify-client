import React from 'react';


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
      <div>
      <h6 className='title-favorite'>Favoris</h6>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label=""
        onClick={handleChange}
      />
      </div>
 </>
  );
}

export default CheckboxLabels;