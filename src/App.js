import './App.css'
import PlayList from './components/PlayList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home'


function App() {

  return (
    <Router>
      <Switch>  
          <div className="container" >
            <Route exact path="/" >
                <Home/>
            </Route>
            <Route path="/playlist" >
                <PlayList/>
            </Route>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
