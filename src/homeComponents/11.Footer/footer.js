import "./footer.css";
import vitamuFooter from "./vitamuFooter.png";
import {Routes, Route, Link, NavLink} from 'react-router-dom';

const Footer = () => { 

  return (
 
     <div className="footer"> 


          <div className="footer-main">

                 
                 
                 <div className="footer-main-left"> 
                
                 <Link
    style={{  textDecoration: "none",}}
    to="/form">       <a 
                     
                     style={{position: "relative", top: "234px", left: "12px", zIndex: "1", width:"250px", height:"47px"}}
                     className="button7" href="#"  
                     
                     
                     >

                      <span className="buttonText7"> Get Started</span>
                      <span className="line7">|</span>
                      <span className="arrow7"> ➔</span>

                     </a> </Link>
                   
                     <img src= {vitamuFooter} className="footer-main-left-image" /> 
                
                 </div>




                 <div className="footer-main-right"> 

                    <ul>
                        <li>Facts</li>
                        <li>Human Error</li>
                        <li>Missed Diagnosis</li>
                        <li>Early Detection</li>
                        <li>Statistics</li>
                        <li>Resources</li>
                    </ul>



                    <ul>
                        <li>Recheck </li>
                        <li>How It Works</li>
                        <li>Technology</li>                   
                        <li>Journey of a Mammogram</li>
                        <li>What is Next?</li>
                    </ul>



                    <ul>
                        <li>People</li>
                        <li>Stories</li>
                        <li>Donate</li>
                        <li>Research Fund</li>
                       
                    </ul>



                    <ul 
                 
                    >
                        <li>Help</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Stage 4 Support</li>
                        <li>Breast Self-Exam Reminder</li>
                       
                    </ul>


              
              
              
              
              
              
              
                 </div>
          
         
         
         
         
          </div>



     </div>


   

  )


}








export default Footer;