import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import PlayList from './components/PlayList';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/playlist">
          <PlayList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
