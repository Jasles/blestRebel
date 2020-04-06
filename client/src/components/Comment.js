import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Comment extends Component {
    state = {
        Comment: {
            name: '',
            comment: '',
        },

        
  
    }
      
    submitCreateForm = (event) => {
        event.preventDefault();
        axios.post('/api/v1/comment/', this.state).then(response =>
            {console.log(response.data)} )

        }

    changeInput = (event) => { 
        this.setState({  
            [event.target.name]: event.target.value
            })
        }
    componentDidMount() {
            this.getComment();
        }

    render() {
        return (
            
            <div>
                 <form onSubmit={ this.submitCreateForm }>
                            <input type="text" name="name" value ={this.state.name} onChange={ this.changeInput }/>
                            <input type="text" name="comment" value= {this.state.comment} onChange={ this.changeInput }/>
                            <input type="submit" value="Create"/>
                          </form>
                
            </div>
        );
    }
}

export default Comment;