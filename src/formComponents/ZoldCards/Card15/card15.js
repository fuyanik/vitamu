import "./card15.css"
import React from 'react';
import gV from "../../gV"
const Card15 = ({display}) => {
 return (

    <div className="card15" style={{display: display}}>

    <h1> <a href="https://www.youtube.com/watch?v=nkPR4ar1EQ4" target="_blank"> Here is a guide </a>that shows how you can conduct a breast self-exam which helps you to be aware any changes in your breast.
    </h1>
    <h2>Now, it’s time to enroll our “always free” monthly breast self-exam reminder. You, like many of us, will probably forget to get one done, and this reminder will help you not to miss even one. </h2>
    <h3>What is your e-mail address?</h3>

    <input
     onChange={(e) => {
         
        gV.MailAddres = e.target.value;
    }}

     
    
    
    className="nameİnput" type="email" name="name" id="name"/>
</div>

 )

}

export default Card15