/* eslint no-unused-vars : "off" */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header.js';
import Rockets from './components/Rockets.js';
import Missions from './components/Missions.js';
import Profile from './components/Profile.js';
import MissionsList from './pages/MissionsList.js';

const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <Missions />
      <Switch>
        <Route exact path='/'>
          <Rockets />
        </Route>
        <Route path='/Missions'>
          <MissionsList />
        </Route>
        <Route path='/Profile'>
          <Profile />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
