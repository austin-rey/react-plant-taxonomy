import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './containers/LandingPage'
import SearchPage from './containers/SearchPage'
import PlantPage from './containers/PlantPage'
import CategoryPage from './containers/CategoryPage'

import Navigation from './components/Navigation'

import { Container,CssBaseline } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import './App.css'

const useStyles = makeStyles({
  container: {
    padding: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  app: {
    backgroundColor: '#FFF',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="lg" className={classes.container}>
        <Router>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/search/:pageNumber'>
            <SearchPage/>
          </Route>
          <Route exact path='/plant/:id'>
            <PlantPage/>
          </Route>
          <Route exact path='/category/:category'>
            <CategoryPage/>
          </Route>
        </Router>
      </Container>
    </div>
  );
}

export default App;

