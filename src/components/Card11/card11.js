import "./card11.css"
import gV from "../../gV"
import React from 'react';
const Card11 = ({display}) => {
    return (

        <div className="card11 "  style={{display: display}}>

        <h1>Please enter last two number of your SSN number and first two letters of your surname</h1>
        <p>Please leave no space between numbers and letters.</p>
        <input className="nameİnput" type="number" name="name" id="name" onClick={()=> {
     
       

        }} onChange= {()=> {

            gV.paymentFee = 1;
        }} />

    </div>
   
    )
}

export default Card11;