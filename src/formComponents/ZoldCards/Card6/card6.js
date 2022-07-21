
import YesNoButton from "../YesNoButton/yesNoButton"
import "./card6.css"
import React from 'react';
const Card6 = ({display}) => {

    return (
        <div className="card6 "  style={{display: display}}>

        <h2>Here is a question for recheck. <span> Do you have a digital copy of your mammogram? </span></h2>
        <p>Digital copies may be on a CD, USB stick, or a computer file.</p>

        <YesNoButton
        chooseYes= {90}
        chooseNo= {80}
        
        /> 



        </div>

    )
}

export default Card6