import "./card7.css";
import { useState } from "react";
import gV from "../../gV";
import { setGlobalState, useGlobalState } from "../../hookState";


const Card7 = () => {

  const [isSelect1, setIsSelect1] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);

  const [formDestiny] = useGlobalState("formDestiny");

    return (
      <div className="card7">
        <div className="card7-main">
           
            <div className="card7-texts">
              
               <p>Before we can carry out a recheck, we will need a copy of your mammogram.</p> 
               <p>Do you have a digital copy of your mammogram?</p>
               <p>Digital copies may be on a CD, USB stick, or a computer file.</p>

            
            </div>
           
            <div className="card7-main-buttons">
                <div className={`${isSelect1 ? "card7-main-buttons-item-selected" : "card7-main-buttons-item"}`}
                onClick={() => {setIsSelect1(true); setIsSelect2(false); setGlobalState("formDestiny" , 1); console.log(formDestiny) }  }
                >Yes</div>
              <div className={`${isSelect2 ? "card7-main-buttons-item-selected" : "card7-main-buttons-item"}`}
                onClick={() => {setIsSelect2(true); setIsSelect1(false); setGlobalState("formDestiny" , 2); console.log(formDestiny)  }  }
                >No</div>
            </div>
                
        </div>
      </div>
    );
}

export default Card7;