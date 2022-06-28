import "./hero.css"
import React from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom';

const Hero = () => { 

return (

   <div className="Hero"> 
 
       <div class="mainText">
           
            <h1 id="recheck"> We recheck</h1>
            <h1 id="mammo"> mammograms.</h1>

            <p id="every"> Every year in the United States, radiologists miss more than 40,000 breast cancer cases in women as a result of human error.  </p>

            <p id="we"> In less than 24 hours, our checks will ensure that you will not be one of these missed cases.</p>
 
            <Link
    style={{  textDecoration: "none",}}
    to="/form">    <a class="button-2" href="../FormPage/index.html">

                <span class="buttonText-2"> Recheck Today</span>
                <span class="line-2">|</span>
                <span className="arrow-2">➔</span>

            </a> </Link>

        </div>
 
 
 
 
        <div className="girl"></div>
 
 
   </div>


)

}

export default Hero;