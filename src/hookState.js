
import { createGlobalState } from 'react-hooks-global-state';
import { MdOutlineArrowForward } from "react-icons/md";
import  "./components/ForwardButton/forwardButton.css"
import React from 'react';

const {setGlobalState, useGlobalState} = createGlobalState({

    myButtonType : <MdOutlineArrowForward className='forward-icon'/>,
    
    myButtonWidth: '100px',
    myButtonleft: "48%",
    myBackButtonleft: "44.7%",
    userName: "",
    scq: 0,

});


export {useGlobalState, setGlobalState};