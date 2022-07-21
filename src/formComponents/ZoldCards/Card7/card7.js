import { useState } from "react";
import gV from "../../gV";
import "./card7.css"
import React from 'react';
const Card7 = ({display})=> {


    const [preferUpload, setPreferUpload] = useState(false);
    const [preferShip, setPreferShip] = useState(false);
   
    return(
        <div className="card7 " style={{display: display}}>

        <h1>We will need a copy of your mammogram. You can send it in two ways. <span>Which one do you prefer?</span> </h1>
        <p>Uploading the digital copy is the fastest way. If you choose to ship them, the 24-hour recheck period will start after we receive the packages.</p>

        <a className="yes-button3" href="#" 
        style={{
         backgroundColor:  preferUpload && "#142b6f",
         color: preferUpload && "white",

        }}

        onClick= {()=>{
             setPreferUpload(true)
             setPreferShip(false)

        }}
        >
             I can upload the digital copy
            <ion-icon className="arrow-solution" name="arrow-forward-outline"></ion-icon>
        </a>

        <a className="no-button3" href="card7.js" 
        style={{
            backgroundColor:  preferShip && "#142b6f",
            color: preferShip && "white",
   
           }}
           onClick= {()=>{
            setPreferShip(true)
            setPreferUpload(false)
            gV.formDestiny = 85;

       }}
        >
          I prefer to ship them
            <ion-icon className="arrow-solution" name="arrow-forward-outline"></ion-icon>

        </a>




    </div>

    )
}
export default Card7;