/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PlayList from './components/PlayList';
import Home from './components/Home';
import PrivateRoute from './Router/PrivateRoute';
import NotFoundPage from './components/404';
import Profile from './components/Profile';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/playlist">
          <PlayList />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
