import "./card14.css"
import React from 'react';

import gV from "../../gV.js";
const Card14 = ({display}) => {

     return (
      
      <div className="card14" style={{display: display}}>

        <h1>That's super nice. Now, it’s time to enroll our “always free” monthly breast self-exam reminder. You, like many of us, will probably forget to get one done at regular basis, and this reminder will help you not to miss even one. </h1>
        <h2>What is your e-mail address? </h2>
        <input
           onChange={(e) => {
         
               gV.MailAddres = e.target.value;
    
            
           
           
            }}
        className="nameİnput" type="email" name="name" id="name"/>

     </div>
 
     )
}

export default Card14;