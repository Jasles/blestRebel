import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class Allcountries extends Component {
    state = {
        country:null,

    }

    getCountry = () => {
        axios.get('https://api.covid19api.com/country/south-africa/status/confirmed').then((response) => {
            const foundCountry = response.data;
            this.setState({
                country: foundCountry,
               
            });
        });
    }


    componentDidMount(){
        this.getAllcountries();
    }

    
            render() {
             
                return (
                <div>
                          
                <h1>Global Recovered</h1>
             
                { this.state.Allcountries
                    ? <Allcountries country={ this.state.Allcountries.country.spain }/>
                    : null
                }
  
                    <div><Link to ="/allcountries">All Countries</Link></div> 
                    <div><Link to ="/comment">Comments</Link></div> 
                    <div><Link to="/teammember">Team Members</Link></div>
                    <div><Link to="/requests">Requests</Link></div>
                </div>
                )
            }
        }
        

export default Allcountries;