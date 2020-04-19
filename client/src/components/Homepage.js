import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeamMembers from './TeamMember';
import Requests from './Requests';
import '../App.css';
import axios from 'axios';
import Global from './Global';


import Logo from './maskedheart.jpg';


class Homepage extends Component {
    state = {
        global:null,

    }

    getGlobal = () => {
        axios.get('https://api.covid19api.com/summary').then((response) => {
            const foundGlobal = response.data;
            this.setState({
                global: foundGlobal,
               
     
            });
        });
    }


    componentDidMount(){
        this.getGlobal();
    }

    
            render() {
             
                return (
                <div>
                          
                <h1 className="homehead">Give the Gift of LOVE</h1>
                <p className="Blackyellow"> BLEStREBEL </p>
                <p className="Blackyellow2"> BLEStREBEL </p>
                    <p className="hometext"> <img src={Logo} className="logo"/><div className="h"> <span>BLEStREBEL </span>
                    is a Non-Profit organization
                              created to serve the world with love. We assist those affected
                              by tragedies. All of our efforts are supported by the Art Brand BLEStREBEL. <button className="shop">SHOP</button> </div>
                    </p>
                <p className="homeinfohead"> "Blest be the Rebels that RISE UP in the name of Love"</p>
                <p className= "homeheadline"> We hope to inspire a selfless world, <div>where people do whats right despite what is popular.</div></p>
               <p className= "parahome">  </p>
                          
                { this.state.global
                    ? <Global global={ this.state.global }/>
                    : null
                }
  
                    
                </div>
              
                )
            }
        }
        

export default Homepage;