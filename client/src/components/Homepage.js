import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeamMembers from './TeamMember';
import Requests from './Requests';
import '../App.css';
import axios from 'axios';
import Global from './Global';



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
                          
                <h1>Global Recovered</h1>
             
                { this.state.global
                    ? <Global global={ this.state.global }/>
                    : null
                }
  
                    
                    <div><Link to ="/comment">Comments</Link></div> 
                    <div><Link to="/teammember">Team Members</Link></div>
                    <div><Link to="/requests">Requests</Link></div>
                </div>
                )
            }
        }
        

export default Homepage;