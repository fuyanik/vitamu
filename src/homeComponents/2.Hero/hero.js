import "./hero.css"
import React from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import heroImage from './heroImage.png'
import { useState } from "react";
import gV from "../../gV"


// <Link style={{  textDecoration: "none",}} to="/form">  </Link> 




const Hero = () => { 

const [isHover, setIsHover] = useState(false);

return (
  <div className="Hero">
    <div className="hero-main">
      <div class="main-text">
        <h1> We recheck mammograms.</h1>

        <p>
          {" "}
          Every year in the United States, radiologists miss more than 40,000
          breast cancer cases in women as a result of human error.{" "}
        </p>

        <p>
          {" "}
          In less than 24 hours, our checks will ensure that you will not be one
          of these missed cases.
        </p>
      </div>

      {isHover ? (
        <div
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="hero-button-hover"
        > 
        
        <h2>Choose your Bi-rads score:</h2>
        <Link style={{  textDecoration: "none",}} to="/form">  <p onClick={()=>{gV.biRads = "1"; gV.p = 1}}>Bi-rads 1 ➔</p> </Link> 
        <Link style={{  textDecoration: "none",}} to="/form">  <p onClick={()=>{gV.biRads = "2"; gV.p = 1}} >Bi-rads 2 ➔</p> </Link> 
        <Link style={{  textDecoration: "none",}} to="/form">  <p onClick={()=>{gV.biRads = "3"; gV.p = 1}}  >Bi-rads 3 ➔</p> </Link> 
        <Link style={{  textDecoration: "none",}} to="/form">  <p onClick={()=>{gV.isShowBiRads123 = false; gV.p = 1}} >Bi-rads 4 ➔</p> </Link> 
        
        
        
        </div>
      ) : (
        <a
          onMouseMove={() => {
            setIsHover(true);
          }}
          class="button-2"
          href="../FormPage/index.html"
        >
          <span class="buttonText-2"> Get Started</span>
          <span class="line-2">|</span>
          <span className="arrow-2">➔</span>
        </a>
      )}

      <img src={heroImage} className="heroImage" />
    </div>
    <div className="girl"></div>
  </div>
);

}

export default Hero;