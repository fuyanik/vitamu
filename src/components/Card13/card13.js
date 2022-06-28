import YesNoButton from "../YesNoButton/yesNoButton"
import "./card13.css"
import React from 'react';


const Card13 = ({display}) => {

    return (
        
        <div className="card13" style={{display: display}}  >
    
        <h1>That’s not very nice. Women, who are over 40, need to get a mammogram as it is the most effective way to detect breast cancer.</h1>

        <h1>In the US, 1 in 8 women will get breast cancer during their life time. That’s why a mammogram is what you need, as soon as possible.</h1>

        <h2>We will come back to this later.</h2>
    
        <h1> <span>Do you conduct breast self-exam, once in a month?</span></h1>

        <YesNoButton
    chooseYes={220}
    chooseNo= {240}
        />
      
    </div>
    
    )
}

export default Card13