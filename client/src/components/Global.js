import React, { Component } from 'react';


export default class  extends Component {
    render() {
        const { totalrecovered } = this.props.global;
        return (
            <div>
                <h2><span >{ this.props.totalrecovered}: </span></h2>
                
            </div>
        )
    }
}