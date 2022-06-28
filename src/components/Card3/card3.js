import YesNoButton from "../YesNoButton/yesNoButton";
import "./card3.css"
import React from 'react';
const Card3 = () => {

return (
   
   <div className="card3">
    <div>
        <h1>Thank you, I hope you are feeling great today</h1>
        <h2>Here is an important question to make sure your breasts are healthy. <span>Did you get your mammogram within last 12 months? </span></h2>
    </div>

    <YesNoButton
      chooseYes= {100}
      chooseNo = {200}
    
    />

</div>

)


}

export default Card3;