import DropdownMenu from "../DropdownMenu/dropdownMenu"
import "./card16.css"
import React from 'react';
const Card16 = ({display}) => {

const allLocation = [

"United States",
"United Kingdom",
"Canada",

]

return (
    <div className="card16" style={{display: display}}>

    <h1>You are now all set. We will remind you your breast self-exam, so you will be in control of the health of your breasts and body. </h1>
    <h2>One last thing, you told, you did not get a mammogram in last 12 months. </h2>
    <h3>Here is FDA mammogram screening facility locator, find a place close to you, and get your mammogram screening done. </h3>


      <DropdownMenu
      right= {"100px"}
      top= {"20px"}
      listİtem={allLocation}
      
      
      />



    </div>
   )}

export default Card16