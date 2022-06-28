import "./card5.css"
import React from 'react';

const Card5 = ({display}) => {


    return (
        <div className="card5 "  style={{display: display}}>
<div> 
        <h1>We are a team of 80 US-based radiologists, and we recheck mammograms with artificial intelligence to make sure your case was not missed. </h1>
        <h1>This is how it works. First, the system randomly assigns two radiologist for your mammogram recheck, and each of these two radiologists evaluate the mammogram seperately, but with the use of artificial intelligence. Then we individually
            upload our findings, and the system compares the results. </h1>
        <h1>If there is an alarm reported by any or both of these radiologists, or artificial intelligence, then we arrange you a physical examinations on one of our partner locations, for free. If there is nothing found, we let you know you are breast
            cancer free. </h1>
        <h1> This whole process takes only 24 hours, once we receive a copy of your mammogram. </h1>
        <h1> Let’s recheck your mammogram. To do this, we need an e-mail address to stay in contact with you. If you have any questions about anything regarding your breast health, my e-mail address is jessica@vitamu.com. </h1>

        <input className="nameİnput" type="email" name="name" id="name"/>
</div>
  
    </div>

    )
}

export default Card5;