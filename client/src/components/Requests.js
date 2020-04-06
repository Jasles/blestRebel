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
                            <input type="text" name="name" value ={this.state.name} onChange={ this.changeInput }/>
                            <input type="text" name="email" value ={this.state.email} onChange={ this.changeInput }/>
                            <input type="text" name="phone_number" value={this.state.phone_number} onChange={ this.changeInput }/>
                            <input type="text" name="need" value= {this.state.need} onChange={ this.changeInput }/>
                            <input type="submit" value="Create"/>
                          </form>
                
            </div>
        );
    }
}

export default Requests;