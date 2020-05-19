import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating({res, level}) {
    
console.log(level)
console.log(res)



  return (
    <div>
      <Box component="fieldset" mb={3}  borderColor="transparent">
        <Typography component="legend">{level}</Typography>
        <Rating name="read-only" value={res} readOnly max={3} />
      </Box>
    </div>
  );
}