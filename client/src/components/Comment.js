import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Comment extends Component {
    state = {
        comment: {
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
    getComment = () => {
        const commentId = this.props.match.params.commentId;
        axios.get('/api/v1/comment/').then((response) => {
            this.setState({
        
                 })
            })
        }

     componentDidMount() {
            this.getComment();
        }

    render() {
        return (
            
            <div>
               
                 <form onSubmit={ this.submitCreateForm }>
                           <p>Name</p> <input type="text" name="name" value ={this.state.name} onChange={ this.changeInput }className="box"/>
                            <p>Comment</p><input type="text" name="comment" value= {this.state.comment.comment} onChange={ this.changeInput }className="largebox"/>
                            <input type="submit" value="Create"/>
                          </form>
                
            </div>
        );
    }
}

export default Comment;