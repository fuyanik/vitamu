import gV from "../../gV";
import "./card12.css"
import React from 'react';
const Card12 = ({display}) => {
    return (

        <div className="card12 "  style={{display: display}}>

        <h1>This is what you will pay for your recheck: </h1>
        <p>You won't be charged until your recheck report is ready. Now, all you have to do is to authorize the payment.</p>
        <h2>{gV.formDestiny == 40 ? "$60.00" : "$45.00" }</h2>
        <span className="span"></span>

    </div>
   
    )
}

export default Card12;