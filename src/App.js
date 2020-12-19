import {useState, useEffect} from 'react';

import Classifications from './containers/Classifications';
import Landing from './containers/Landing'
import Navigation from './components/Navigation';

import trefle from './api/trefle'

import { Container,CssBaseline } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles({
  container: {
    padding: '10px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  app: {
    backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Navigation />
      <Container maxWidth="lg" className={classes.container}>
        <Landing />
      </Container>
    </div>
  );
}

export default App;

