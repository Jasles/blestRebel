import React, { Component } from 'react';


 export default class Global extends Component {
    render() {
        const  percentRecovered  = (this.props.global.Global.TotalRecovered/this.props.global.Global.TotalConfirmed)*100;
        return (
            <div>
                <h2><span >Pecentage of Individuals who have fully recovered from the Coronavirus: 
                {percentRecovered}%: </span></h2>
        <h2><span>  Total number Individuals who have recovered: {this.props.global.Global.TotalRecovered}</span></h2>
                
            </div>
        )
    }
}