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




const Home = () => { 


  var mq = window.matchMedia( "(max-width: 768px)" );
  
  return (
  <div className='VitamuHome' > 
  
  
  
      <Navbar/>
      <Hero/>
      <Logos/>
      <WomenSpeak/>

     { mq.matches ? null : <AllinOneService/> }  
     { mq.matches ? null :   <BeyondMethods/> }  
      
     <br/>  <br/>  <br/>  <br/>    <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/> 
      <Radiologists/>
      <MajorPlans/>
      <HaveQuestions/>
      <LearningCenter/>
      <Footer/>
     
    
  </div>
    )
  
  }
  
  export default Home;


 
