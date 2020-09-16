import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Paper, Typography, Container } from '@material-ui/core';

import { Footer } from './components/organisms/Footer';
import { SignInForm } from './components/organisms/SignInForm';

import { useStyle } from './styles'

function App() {
  const formRef = useRef(null);
  const classes = useStyle();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(4).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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
          <SignInForm onSubmit={handleSubmit} onRef={formRef} />
        </Paper>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
