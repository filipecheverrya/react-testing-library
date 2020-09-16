import React from 'react';
import { Paper, Typography, Container } from '@material-ui/core';

import { Footer } from './components/organisms/Footer';
import { SignInForm } from './components/organisms/SignInForm';

import { useStyle } from './styles'

function App() {
  const classes = useStyle();

  async function handleSubmit(data) {
    console.log('<App /> !!! ', data);
  }

  return (
    <Container component="main">
      <div className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
          <Typography variant="h2">
            Post whatever you want anytime you want for FREE
          </Typography>
        </div>
        <Paper className={classes.signinBox} elevation={3}>
          <SignInForm onSubmit={handleSubmit} />
        </Paper>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
