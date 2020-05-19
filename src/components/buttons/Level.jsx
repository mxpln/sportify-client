// import React from 'react';
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// const labels = {
//   1: 'Débutant',
//   2: 'intermediaire',
//   3: 'confirmé',
// };

// export default function SimpleRating() {
//   const [value, setValue] = React.useState(1);

//   return (
//     <div>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Niveau</Typography>
//         <Rating
//           name="simple-controlled"
//           defaultValue={1} max={3}

//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         />
//       </Box>

//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const labels = {
  1: "(débutant)",
  2: "(intermédiaire)",
  3: "(avancé)",
};

const useStyles = makeStyles({
  root: {
    // width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const HoverRating = ({ ratingValue }) => {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography component="legend">Niveau </Typography>
        {value !== null && (
          <Box ml={2}>{labels[hover !== 1 ? hover : value]}</Box>
        )}
      </div>

      <Rating
        name="hover-feedback"
        defaultValue={1}
        max={3}
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          ratingValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {/* {value !== null && <Box ml={2}>{labels[hover !== 1 ? hover : value]}</Box>} */}
    </div>
  );
};

export default HoverRating;
