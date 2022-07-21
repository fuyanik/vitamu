import gV from "../../gV";
import "./majorPlans.css"
import {useEffect, useState, useRef} from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom';

const MajorPlans = () => {

  const [scrollNumber, setScrollNumber] = useState(0);
  const [isFadeIn, setIsFadeIn] = useState(false);
 
  window.addEventListener('scroll', function() {
   
    
    
    setScrollNumber(window.pageYOffset);

    scrollNumber > 4300 && setIsFadeIn(true);
    });

    //scrollNumber > 4300 ? 'major-plans-main-telephone' : null 

 return(
  
     <div className="major-plans">
     
         


          <div className="major-plans-main"> 

               
               
               <div 
               className=  
               {isFadeIn ? 'major-plans-main-telephone-fadein' : 'major-plans-main-telephone'}>
               
     
               </div>
              
               
          
                   


               
               <div className="major-plans-main-items"> 

                       <div className="major-plans-main-items-header"> 
   
                           <p> Insurance accepted</p>

                           <h2> We accept all major insurance plans. </h2>

                       </div>

                       <div className="major-plans-main-items-hospitals"> 
                      
                             <ul>  
                               <li>United Healthcare</li>
                               <li>Oscar</li>
                               <li>Aetna</li>
                               <li>Molina Healthcare</li>
                               <li>Humana</li>
                             </ul>
                             
                            
                             <ul>
                               <li>Cigna</li>
                               <li>Magellan</li>
                               <li>Anthem</li>
                               <li>Blue California</li>
                               <li>Blue Shield</li>
                             </ul>
                          

                             <ul>
                                <li>Care Plus</li>
                                <li>Freedom Health</li>
                                <li>WellCare</li>
                                <li>United American</li>
                                <li>Caresource</li>
                            </ul>
                                 

                       </div>


                       <div className="major-plans-main-items-footer">

                          <p> No insurance? No problem. A recheck costs only $60. </p>
                         
                          <p> Can’t afford? We can help </p>
                       
                          <Link
    style={{  textDecoration: "none",}}
    to="/form">      <a className="button7" href="#">

                            <span className="buttonText7"> Get Started</span>
                            <span className="line7">|</span>
                            <span className="arrow7"> ➔</span>
                         
                          </a>   </Link>


                       </div>
                           
                       









               </div>



          </div>
            
            
            
     </div>
            
    
    
    )
}


export default MajorPlans;

