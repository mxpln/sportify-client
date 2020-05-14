import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(1);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Niveau</Typography>
        <Rating
          name="simple-controlled"
          defaultValue={1} max={3}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
     
    </div>
  );
}