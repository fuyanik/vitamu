import Navbar from '../../homeComponents/1.Navbar/navbar';
import './mobileNavMenu.css'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import mobileNavImage from './mobileNavImage.png';

const MobileNavMenu  = () => {
    return (
<>
<Navbar
           mobileMenuText={"Close"}
           mobileMenuTo ={"/"}
          />
          <img  className='mobile-nav-image' src={mobileNavImage}/>
       
        <div className='mobile-nav-menu'> 
         
          <div className='mobile-nav-menu-main'>

               <h2>Facts</h2>
               <h2>Recheck</h2>
               <h2>People</h2>
               <h2>Help</h2>

               <Link
    style={{  textDecoration: "none",}}
    to="/form">    <a class="button-2" href="../FormPage/index.html">

                <span class="buttonText-2"> Get Started</span>
                <span class="line-2">|</span>
                <span className="arrow-2">➔</span>

            </a> </Link>


     
        </div>
        
      
        
        
        </div>
        </>
    )
}

export default MobileNavMenu;