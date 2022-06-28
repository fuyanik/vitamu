import "./beyondMethods.css";
import {Routes, Route, Link, NavLink} from 'react-router-dom';
const BeyondMethods = ( ) => {


    return  (
<div className="beyond-methods"> 

      <div className="beyond-methods-main"> 

           
           
            <div className="beyond-methods-text-area"> 
            
               <h3>Thinking beyond the traditional methods. </h3>
               <p> We bring radiologists and technology together.  </p>
               <p> On the right, you can see how our artificial intelligence spots healthy and unhealthy breast tissue in just seconds.  </p>
               <p> While a single radiologist can fail to identify cancer on a mammogram screening, our radiologists assisted with our artificial intelligence will not. </p>
          
               <Link
    style={{  textDecoration: "none",}}
    to="/form">      <a class="button" href="">
                   <span className="buttonText"> Get Started</span>
                   <span className="line">|</span>
                   <span className="arrow">➔</span>
               </a> </Link>
        
             
            </div>
   
               

            
            
            <div className="image">


            </div>



      </div>


</div>


    )
}

export default BeyondMethods;