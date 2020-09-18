import React, { useEffect, useState } from 'react';
import { Paper, Typography, Container, Grid } from '@material-ui/core';

import { Footer } from './components/Footer';
import { SignInForm } from './components/SignInForm';
import { CriticThumbnail } from './components/CriticThumbnail';
import { CriticDetail }from './components/CriticDetail';
import { getCritics } from './api';

import { useStyle } from './styles'

function App() {
  const classes = useStyle();
  const [modalVisibility, setModalVisibility] = useState(false);

  function handleLoginData(data) {
    console.log('Logou certinho!!! ', data);
  }

  const [info, setInfo] = useState(null);
  
  const handleData = async () => {
    try {
      const response = await getCritics();
      const { data } = response;
      
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleThumbClick = (data) => {
    console.log(data);
    setModalVisibility(true);
  }
  
  const handleCloseModal = () => {
    setModalVisibility(false);
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Container component="main">
      
      <div className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
          <Typography variant="h2">
            Post a movie critic anytime you want for FREE
          </Typography>
        </div>
        <Paper className={classes.signinBox} elevation={3}>
          <SignInForm onSubmit={handleLoginData} />
        </Paper>
      </div>
      
      <Grid container spacing={3} className={classes.gridWrapper}>
        {info?.results.map((item, k) => (
          <Grid item xs={3} key={`key-${k+1}`}>
            <CriticThumbnail
              data={item}
              handleClick={() => handleThumbClick(item)}
            />
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="overline" className={classes.overline}>
        {info?.copyright}
      </Typography>
      
      <Footer />
      
      <CriticDetail onClose={handleCloseModal} open={modalVisibility} />

    </Container>
  );
}

export default App;
