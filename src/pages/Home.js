import React from 'react';
import Navbar from "../homeComponents/1.Navbar/navbar"
import Hero from "../homeComponents/2.Hero/hero"
import Logos from "../homeComponents/3.Logos/logos"
import WomenSpeak from '../homeComponents/4.WomenSpeak/womenSpeak';
import AllinOneService from '../homeComponents/5.AllinOneService/allinoneservice';
import BeyondMethods from '../homeComponents/6.BeyondMethods/beyondMethods';
import Radiologists from '../homeComponents/7.Radiologists/radiologists';
import MajorPlans from '../homeComponents/8.MajorPlans/majorPlans';
import HaveQuestions from '../homeComponents/9.HaveQuestions/haveQuestions';
import LearningCenter from '../homeComponents/10.LearningCenter/learningCenter';
import Footer from '../homeComponents/11.Footer/footer';
import MobileAllinOne from '../homeComponents/20.MobileAllinOne/mobileAllinOne';
import MobileBeyondMethods from '../homeComponents/21.MobileBeyondMethods/mobileBeyondMethods';
import MobileFooter from '../homeComponents/22.MobileFooter/mobileFooter';
import { Timestamp,collection,addDocument, addDoc } from 'firebase/firestore';
import gV from '../gV';
import db from '../firebase';



const Home = () => { 


 


  var mq = window.matchMedia( "(max-width: 768px)" );
  
  return (
  <div className='VitamuHome' > 
  
  
  
      <Navbar
      mobileMenuText={'Menu'}
      mobileMenuTo ={"/mobileNavMenu"}
      />
      <Hero/>
      <Logos/>
      <WomenSpeak/>
      
      

     { mq.matches ?  <MobileAllinOne/> : <AllinOneService/> }  
     { mq.matches ?  <MobileBeyondMethods/> :   <BeyondMethods/> }  
      

      <Radiologists/>
      <MajorPlans/>
      <HaveQuestions/>
      <LearningCenter/>
      
      {mq.matches ? <MobileFooter/> : <Footer/>}
      

      
     
    
  </div>
    )
  
  }
  
  export default Home;


 
