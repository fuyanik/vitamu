import {useEffect, useState, useRef} from 'react';
import BackButton from '../formComponents/components/BackButton/backButton';
import ForwardButton from '../formComponents/components/ForwardButton/forwardButton';
import '../index.css'
import gV from "../gV.js"
import db from "../firebase"

import Card1 from '../formComponents/Card1/card1.js';
import Card2 from '../formComponents/Card2/card2.js';

import { Timestamp,collection,addDocument, addDoc } from 'firebase/firestore';

import { setGlobalState, useGlobalState } from "../hookState";

import React from 'react';
import Navbar from '../homeComponents/1.Navbar/navbar';

import Card3 from '../formComponents/Card3/card3';
import Card4 from '../formComponents/Card4/card4';
import Card5 from '../formComponents/Card5/card5';









function Form () {

    


  //ALL VARİABLE AND FUNCTİON HERE******************************

  const [defaultType] = useGlobalState("myButtonType");
  const [buttonWidth] = useGlobalState("myButtonWidth");
  const [buttonleft] = useGlobalState("myButtonleft");
  const [backButtonleft] = useGlobalState("myBackButtonleft");
  
  
 
  
  

  const [divHeight, setDivHeight] = useState(0);
  const [slidePage, setSlidePage] = useState("");
 
  // const [buttonWidth, setButtonWidth] = useState("100px")
  //const [buttonleft, setButtonleft] = useState("48%")
  //const [backButtonleft, setBackButtonleft] = useState("44.7%")
  var [isFade, setİsFade]= useState(false);


  
  const ref = useRef(null);

  useEffect(() => {
    //GET CLİENT HEİGHT
    setDivHeight(ref.current.clientHeight);

    //FORWARD BUTTON DESTİNY
    
   });


     
   
    
    
  

  function forwardButtonClick () {
    if (gV.i === 1 || gV.i > 1) {
      //gV.paymentFee == 1 ?  setGlobalState("myButtonType", "Continue with £45") : setGlobalState("myButtonType", "Continue");
      // gV.paymentFee == 2 ? setGlobalState("myButtonType", "Continue with £64") : setGlobalState("myButtonType", "Continue");

      setGlobalState("myButtonWidth", "500px");
      setGlobalState("myButtonleft", "35%");
      setGlobalState("myBackButtonleft", "32%");
    }

    setİsFade(!isFade);
    gV.i = gV.i + 1;

    setSlidePage(`translateY(${-gV.i * divHeight}px)`);
  }



  function backButtonClick () {
    gV.paymentFee = 0;
    
    if( gV.i> 0) { 
      gV.i = gV.i - 1
     setSlidePage(`translateY(${ (-gV.i) * divHeight }px)`);
    }
  }

    


  


  //ALL COMPONENTS START HERE**************************************
  return (
    <div className="App" ref={ref}>
      {/* <Navbar
       mobileMenuTo={"/mobileNavMenu"}
       mobileMen uText={"Menu"}
         /> */}

      <div className="slide-background"></div>
      <div className="slide-background2"></div>

      <div className="left-slide" style={{ transform: slidePage }}>
        <Card1 animation={isFade && "fade-in"} />
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>


        

        {/*

        
         
         <Card4 
          display={gV.formDestiny >= 200 &&  "none"}
         />
         <Card5
           display={gV.formDestiny >= 200 &&  "none"}
         />
    
         <Card6
           display={gV.formDestiny >= 200 &&  "none"}
        
        />
       
         <Card7
           display={(gV.formDestiny >= 200 || gV.formDestiny <= 80) &&  "none"}
         />
         <Card8 
           display={(gV.formDestiny >= 200 || gV.formDestiny  <= 85) &&  "none"}
         />
         
          <Card85
           
           display={(gV.formDestiny >= 200 || gV.formDestiny  > 84) &&  "none"}
          
          />


     <Card9 
          display={gV.formDestiny >= 200 &&  "none"}
         />
         <Card10
          display={(gV.formDestiny >= 200 || gV.formDestiny >= 40) &&  "none"}
         />
         <Card11 
          display={(gV.formDestiny >= 200 || gV.formDestiny >= 40)  &&  "none"}
         />
         
         <Card12 
          display={gV.formDestiny >= 200 &&  "none"}
         />
       
       
         <Card13 
          display={gV.formDestiny < 200 &&  "none"}
         />
         <Card14 
           display={(gV.formDestiny < 200 || gV.formDestiny == 240) &&  "none"}
         />
         <Card15
            display={(gV.formDestiny < 200 || gV.formDestiny == 220)  &&  "none"}
         />
         <Card16 
            display={gV.formDestiny < 200 &&  "none"}
         />
              */}
      </div>

      <ForwardButton
        forwardButtonClick={forwardButtonClick}
        width={buttonWidth}
        left={buttonleft}
        buttonText={defaultType}
      />

      <BackButton backButtonClick={backButtonClick} left={backButtonleft} />
    </div>
  );
 }
 
 
 
 export default Form;







    
   
   

   
 
