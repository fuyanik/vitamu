import "./navbar.css"
import React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import NavbarDropdown from "./navbarDropdown";
import dropdown1 from "./images/dropdown1.jpg"
import dropdown2 from "./images/dropdown2.jpg"
import dropdown3 from "./images/dropdown3.jpg"
import dropdown4 from "./images/dropdown4.jpg"


const Navbar = () => { 

   const [isWhite, setIsWhite] = useState(false);
   const [scrollNumber, setScrollNumber] = useState(0);

   const [showDropdown, setShowDropdown] = useState(0);
   



 
 
  window.addEventListener('scroll', function() {
   
    
    console.log(window.pageYOffset);
    setScrollNumber(window.pageYOffset);

    scrollNumber > 100 ? setIsWhite(true) : setIsWhite(false);
    });

return (
  
<div>

<div className="Navbar"
style={{
   backgroundColor: isWhite && "white",
}}

onMouseMove={() => {
setIsWhite(true);
}}
 
onMouseLeave={() => {

   setIsWhite(false);
}}
 >
    

  { showDropdown == 1 && <NavbarDropdown
      image={dropdown1}
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
     
     { showDropdown == 2 && <NavbarDropdown
      image={dropdown2}
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
       { showDropdown == 3 && <NavbarDropdown
      image={dropdown3}
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
       { showDropdown == 4 && <NavbarDropdown
      image={dropdown4}
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
  
  
  <Link
    style={{  textDecoration: "none", display: "flex", position: "relative", right: "40%",}}
    to="/">   <img class="vitamu-logo" src="https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/94e618de-43e9-4d66-8f04-0006070c14a7/Logo.png?format=1500w" alt="vitamu"/> </Link>
    
   <ul className="nav-items">
      <li className="nav-item"  onMouseMove={() => setShowDropdown(1)  }  >Facts</li>  
      <li className="nav-item"  onMouseMove={() => setShowDropdown(2)  }  >Recheck</li>  
      <li className="nav-item"  onMouseMove={() => setShowDropdown(3)  } >People</li>  
      <li className="nav-item"  onMouseMove={() => setShowDropdown(4)  }  >Help</li>  
   </ul>
  
   
   <Link
    style={{  textDecoration: "none",}}
    to="/form"> 
     
     <a class="button" href="../FormPage/index.html">
      <span className="buttonText"> Get Started</span>
      <span className="line">|</span>
     
      <span className="arrow">➔</span>
   </a>  
   
   </Link>

    </div>


 
 </div>
        
)

}

export default Navbar;

   
   
  
   
   

   

