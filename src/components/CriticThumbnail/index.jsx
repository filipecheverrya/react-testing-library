import React, { useState } from 'react';
import { Paper, Avatar, Typography } from '@material-ui/core';

import { useStyles } from './styles';

function CriticThumbnail({ data, handleClick }) {
  const classes = useStyles();
  const [elevationNum, setElevationNum] = useState(3);

  return (
    <Paper
      elevation={elevationNum}
      className={classes.wrapper}
      onMouseEnter={() => setElevationNum(8)}
      onMouseLeave={() => setElevationNum(3)}
      onClick={handleClick}
    >
      <Avatar src={data?.multimedia?.resource?.src} />
      <Typography variant="caption" className={classes.name}>
        {data.display_name}
      </Typography>
    </Paper>
  );
}

export { CriticThumbnail };