import "./dropdownMenu.css"
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import React from 'react';

const  DropdownMenu = ({listİtem,top,right}) => {
  
  
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");




   
    
    return (

        <div className="dropdown" style={{
           top: top,
           marginRight: right,

        }
        }>

          
        
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
         <MdArrowDropDown className="down-button"/>
        </div>
        
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >

        {listİtem.map((company,idx) => (

             <div
             key={idx}
             className="item"
             onClick={(e) => {
               setIsSelected(e.target.textContent);
               setIsActive(!isActive); }}>
             {company}
             </div>
             
                    ))}
  
        </div>
      </div>
        )
    }
        
      
        
        
       
   
    
    
    export default DropdownMenu;
       
      
        
