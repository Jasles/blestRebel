import React, { Component } from 'react';


 export default class Global extends Component {
    render() {
        const  percentRecovered  = (this.props.global.Global.TotalRecovered/this.props.global.Global.TotalConfirmed)*100;
        return (
            <div>
                <div className="stat"><span>  {this.props.global.Global.TotalRecovered  } </span></div>
                <div className= "stattext"> have recovered fully from the virus</div>
                <h2><span >Pecentage of Individuals who have fully recovered from the Coronavirus: 
                {percentRecovered}%: </span></h2>
        
                
            </div>
        )
    }
}