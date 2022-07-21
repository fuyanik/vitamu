import YesNoButton from "../YesNoButton/yesNoButton"
import  "./card9.css"

import React from 'react';
const Card9 = ({display}) => {

    return (
    
<div className="card9 "  style={{display: display}}>


<h2>No problem, we will acquire your mammogram on behalf of you. <span> Do you have an active insurace plan? </span></h2>
<p>We accept major insurance plans or we have special discounts depending on your policy.</p>

 <YesNoButton
 chooseYes={20}
 chooseNo = {40} 

 myPaymentNo = {2}
 />

</div>
    )
}

export default Card9