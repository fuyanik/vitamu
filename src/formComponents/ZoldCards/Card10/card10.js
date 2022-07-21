
import DropdownMenu from "../DropdownMenu/dropdownMenu";
import "./card10.css"
import React from 'react';
const Card10 = ({display}) => {

    const allCompany = [ 
        "United Healthcare",
        "Oscar",
        "Aetna",
        "Molina Healthcare",
        "Humana",
        "Cigna",
        "Magellan",
        "Anthem",
        "Blue California",
        ]
        

    return (

        <div className="card10 "  style={{display: display}}>

        <h1>Please choose your insurance company.</h1>
        <p>If your insurance company is not on the list, please choose other.</p>

        <DropdownMenu  
        listİtem={allCompany}
        
        />

    </div>

    )
}
export default Card10;