
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import TeamMembers from './components/TeamMember';
import Requests from './components/Requests';
import Homepage from './components/Homepage';
import Comment from './components/Comment';


import './App.css';
import Headerphoto from "./header_logo.jpg";



class App extends Component {
  render() {
      return (
          <Router>
                    
                    
                <header className="App">
                    
                    <h1 className="header"><img src={Headerphoto} className="headerphoto"/> BLEStREBEL</h1>
                      <ul className = "navbar1" >
                      <li><Link to="/" className = "links" >HOME</Link></li>
                        <li><Link to ="https://blestrebel.wixsite.com/mysite" className = "links" >ART SHOP </Link>  </li> 
                        <li><Link to ="/comment" className = "links" >COMMENTS </Link>  </li> 
                        <li><Link to="/teammember" className = "links">WHAT WE DO?</Link></li>
                        <li><Link to="/requests" className = "links" >REQUESTS</Link></li>
                        
                    </ul>
                  
                </header>
                  
                  <Switch>
                    
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/teammember" component={TeamMembers}/>
                    <Route exact path="/requests" component={Requests}/>
                    <Route exact path="/comment" component={Comment}/>
                    
                  </Switch>
              
                    <footer>
                             
                        
                    <h1 className="foothead">BLEStREBEL</h1>
                         <container className="social">
                             <div item>
                             <div className= " insta"> Instagram @ BLEStREBEL</div>
                             <div className="facebook"> Facebook</div>
                             <div className="twitter"> Twitter</div>
                            </div>
                         
                        <div item>
                        
                            <div className=" contact">
                            <div className="contacthead">Contact Us</div>
                              <div>Phone Number:     404.433.1341</div>
                                <div>Located:     Atanta, Ga</div>
                                <div>Email: BLEStREBEL@gmail.com</div>
                            </div>
                        </div>
                             
                        </container>
                         
                         <div className="copyright"> Copyright  2020 BLEStREBEL </div>
                         
                        </footer>
          </Router>
      );
  }
}

export default App;
