import { useState } from "react"
import "./card4.css"
import { setGlobalState, useGlobalState } from "../../hookState";
import { MdOutlineArrowForward } from "react-icons/md";

import React from 'react';
const Card4 = ({display}) => {

const [solutionButtonİsSelected, getSolutionButtonİsSelected ] = useState(false);
    return (

        <div className="card4" style={{display: display}}>

                <div>
                    <h1> That’s perfect. Now, I want you to know one fact that may affect your life.</h1>
                    <h1>In the current healthcare system in the US, a mammogram is evaluated by a single radiologist, and as result, each year, more than 40.000 women's breast cancer is missed, due to human error. Humans make mistakes, and we, radiologists
                        are human beings.
                    </h1>
                    <h1>Studies find that a second radiologist would find 82.4% of these missed cases, and a third look would eliminate the missed diagnosis problem.</h1>

                    <h2>Don’t panic, we have a solution. </h2>

                    <a className="solution-button" href="#" 
                    style={{
                backgroundColor: solutionButtonİsSelected && "#142b6f",
                color:  solutionButtonİsSelected && "white"
                
                }}
                    onClick= {()=> {
                        getSolutionButtonİsSelected(true);
                        setGlobalState("myButtonType", <MdOutlineArrowForward className='forward-icon'/>);
                        setGlobalState("myButtonWidth", '100px');
                        setGlobalState("myButtonleft", '48%');
                        setGlobalState("myBackButtonleft", '44.7%'); 
                    }}
                    >
                        <span>  Click here to see our solution</span>
                        <ion-icon className="arrow-solution" name="arrow-forward-outline"></ion-icon>
                    </a>


                </div>


            </div>

    )
}

export default Card4