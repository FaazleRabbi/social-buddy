import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path ='/profile/:id'>
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
