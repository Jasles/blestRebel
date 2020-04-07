import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Requests extends Component {
    state = {
        Requests: {
            name: '',
            phone_number: '',
            email: '',
            need: '',
        },
        thankyou:null,
        
  
    }
      
    submitCreateForm = (event) => {
        event.preventDefault();
        axios.post('/api/v1/requests/', this.state).then(response =>
            {console.log(response.data)} )

        }

    changeInput = (event) => { 
        this.setState({  
            [event.target.name]: event.target.value
            })
        }
    

    render() {
        
        return (

            <div>
                 <form onSubmit={ this.submitCreateForm }>
                           <p>Name</p> <input type="text" name="name" value ={this.state.name} onChange={ this.changeInput } className="box"/>
                           <p>Email</p> <input type="text" name="email" value ={this.state.email} onChange={ this.changeInput }className="box"/>
                            <p>Phone Number</p><input type="text" name="phone_number" value={this.state.phone_number} onChange={ this.changeInput }className="box"/>
                            <p>Please explain your need.</p><input type="text" name="need" value= {this.state.need} onChange={ this.changeInput }className="largebox"/>
                            <div><input type="submit" value="Create"/></div>
                          </form>
                
            </div>
        );
    }
}

export default Requests;