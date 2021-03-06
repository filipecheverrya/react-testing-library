import React from "react";
import { Container, Typography } from '@material-ui/core'

import { Link } from '../Link';

import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Container component="footer">
      <Link
        href="https://filipecheverrya.github.io/"
        target="_blank"
        title="Filipe Echeverrya"
        rel="noopener noreferrer"
        className={classes.link}
        aria-label="developer-link"
      >
        Created by
        <Typography
          component="strong"
          className={classes.strong}
        >
          Filipe Echeverrya
        </Typography>
        <img
          src="https://filipecheverrya.github.io/logo192.png"
          alt="Filipe Echeverrya"
          className={classes.image}
          aria-label="developer-img"
        />
      </Link>
    </Container>
  );
}

export { Footer };