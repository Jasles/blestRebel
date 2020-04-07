
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import TeamMembers from './components/TeamMember';
import Requests from './components/Requests';
import Homepage from './components/Homepage';
import Comment from './components/Comment';
import Allcountries from './components/Allcountries';

import './App.css';
import Logo from './heart_home.jpg';

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">

                  <div>
                      <h1>BLEStREBEL</h1>
                      <img src={Logo} className="logo"/>
                      
                     
                  </div>

                  <Switch>
                    
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/teammember" component={TeamMembers}/>
                    <Route exact path="/requests" component={Requests}/>
                    <Route exact path="/comment" component={Comment}/>
                    <Route exact path="/allcountries" component={Allcountries}/>
                  </Switch>
              </div>
          </Router>
      );
  }
}

export default App;
