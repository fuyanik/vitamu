import "./navbar.css"
import React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import NavbarDropdown from "./navbarDropdown";
import dropdown1 from "./images/dropdown1.jpg"
import dropdown2 from "./images/dropdown2.jpg"
import dropdown3 from "./images/dropdown3.jpg"
import dropdown4 from "./images/dropdown4.jpg"
import vitamuLogo from "./images/vitamuLogo.png"
import vitamuLogo2 from "./images/vitamuLogo2.png"


const Navbar = ({mobileMenuText,mobileMenuTo}) => { 

   
   
   
   var mq = window.matchMedia( "(max-width: 768px)" );
 
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
    
      line1head1="Human Error ➔ "
      line1text1="Learn what human error is and why it happens."
    
      line1head2="Missed Diagnosis ➔ "
      line1text2="%10 of breast cancer cases are missed on mammogram screening. Learn how it affects lives."
    
      line2head1="Early Detection ➔"
      line2text1="It saves lives. More than you think."
     
      line2head2="Statistics ➔ "
      line2text2="U.S. breast cancer statistics are here."
     
      line2head3="Resources ➔ "
      line2text3="Breast cancer, A to Z."
      
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
     
    
    
     { showDropdown == 2 && <NavbarDropdown
      image={dropdown2}
      line1head1="How It Works ➔ "
      line1text1="Learn what recheck is and how it works."
    
      line1head2="Technology ➔ "
      line1text2="Meet our artificial intelligence used by radiologists."
    
      line1head3="Journey of a Mammogram ➔"
      line1text3="Discover how your mammogram is evaluated on a recheck."
    
      line2head1="Radiology Team ➔"
      line2text1="Meet the ones who do the recheck."
     
      line2head2="What is Next? ➔ "
      line2text2="You got your recheck results, here is what comes next."
     
      line2head3="Recheck Report Samples ➔"
      line2text3="Want to learn about scenarios, see recheck report samples."

     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
    
    
    
       { showDropdown == 3 && <NavbarDropdown
      image={dropdown3}
     
      line1head1="Our Story ➔ "
      line1text1="This is how we started our journey."
    
      line1head2="Stories ➔ "
      line1text2="Meet the women whose breast cancer was missed. "
    
      line1head3="Numbers ➔"
      line1text3="We recheck 200+ mammograms per day. Live stats here."
    
      line2head1="Donate ➔"
      line2text1="Your small donations keep people alive. Here is a list of charities you can make donations."
     
      line2head2="Research Fund ➔ "
      line2text2="We support entrepreneurs, researchers, and physicians who are dedicated to breast cancer diagnosis and treatment."
     
 
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
       { showDropdown == 4 && <NavbarDropdown
   
     
      line1head1="Contact ➔  "
      line1text1="Any questions? We are here to help."
    
      line1head2="FAQ ➔ "
      line1text2="Here are the answers for frequently asked questions. "
    
      line1head3="Stage 4 Support ➔"
      line1text3="Are you diagnosed with stage 4 breast cancer? We can help you."
    
      line2head1="Get a Copy of Mammogram ➔"
      line2text1="Learn how to get a copy of your mammogram, for both recheck and future mammogram screenings."
     
      line2head2="Breast Self-Exam Reminder ➔"
      line2text2="Early detection saves lives. With our reminder, you will never skip a single breast self-exam."
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
  
 
 

  <Link
    style={{  textDecoration: "none", display: "flex", }}
    to="/">   <img class="vitamu-logo" src={vitamuLogo} alt="vitamu"/> </Link>
   <Link
    style={{  textDecoration: "none", display: "flex", }}
    to={mobileMenuTo}>   <div className="mobile-dropdown-menu"> {mobileMenuText}</div>  </Link>
 
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

   
   
  
   
   

   

