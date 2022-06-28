import "./card1.css"
import gV from "../../gV.js";

import React from 'react';
import db from "../../firebase";
const Card1 = ({animation}) => {


return (

    
    <div className={`card1 ${animation}`}>
    <div>
       
        <h3> Hello there, my name is Jessica and I am a radiologist specialised in breast cancer diagnosis.</h3>
        <h4> What is your name?</h4>

        <input className="nameİnput" type="text" name="name" id="name"
        
        onChange={(e) => {
         
           gV.userName = e.target.value;

           db.collection("user").add({
            
            name: gV.userName,
           })
       
       
        }}
        
        />


    </div>
    </div>


)

}

export default Card1;

