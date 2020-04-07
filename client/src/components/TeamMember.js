import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TeamMembers extends Component {
    state = {
        error: '',
        teammember: []
    }

    componentDidMount(){
        this.fetchTeamMembers();
    }

    fetchTeamMembers = async () => {
        try {
            const res = await axios.get('/api/v1/teammember/');
            this.setState({teammember: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        if (this.state.teammember.length == 0){
            return null;

        }
        
        else return (
            <div>
                <h1>All Team Members</h1>
                {this.state.teammember.map(teammember => (
                    <div key={teammember.id}>
                      <div>  {teammember.name} </div> 
                      <div>{teammember.role} </div>
                      
                    </div>
                ))}
            </div>
        );
    }
}

export default TeamMembers;