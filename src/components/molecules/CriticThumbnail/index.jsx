import React from 'react';
import { Paper, Avatar, Typography } from '@material-ui/core';

import { useStyles } from './styles';

function CriticThumbnail({ data }) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.wrapper}>
      <Avatar src={data?.multimedia?.resource?.src} />
      <Typography variant="caption" className={classes.name}>
        {data.display_name}
      </Typography>
    </Paper>
  );
}

export { CriticThumbnail };