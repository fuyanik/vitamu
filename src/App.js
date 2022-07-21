
import Home from "./pages/Home"
import Form from "./pages/Form"
import gV from "./gV";
import db from "./firebase";

import { Timestamp} from 'firebase/firestore';
import MobileNavMenu from './pages/MobileNavMenu/mobileNavMenu';

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {Routes} from 'react-router-dom';
import HumanError from "./pages/HumanError/humanError";
import Login from "./formComponents/components/Auth/login";
import Panel from "./pages/Panel/panel";

import { useBeforeunload } from "react-beforeunload";







// <Route path="/" component={Home} />




export default function App() {
  
   
   /* useBeforeunload((event) => {
    event.preventDefault();
    console.log("beforeunload happened!");
  });  */



  
//MAİN BACKEND FUNCTIONALITY

/*
  db.collection("VitamuUsersTEST").add({
            
    Name: gV.userName,
    UserAge : gV.age,
    createdAt: Timestamp.now().toDate(),
   
   }) 


   useBeforeunload((event) => {
    event.preventDefault();
 
    db.collection("VitamuUsersREAL").add({
      Name: gV.userName,
      UserAge : gV.age,
      createdAt: Timestamp.now().toDate(),
    }) 
  });  */

   




   /* window.addEventListener('unload', (e) => {

     e.preventDefault();
    
     db.collection("VitamuUsersREAL5").add({
       Name: gV.userName,
       UserAge : gV.age,
     }) 
   }); */
    

  
            
 
  

 
  
  
    return (

      <Router>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/panel" element={<Panel/>} />

          <Route path="/mobileNavMenu" element={<MobileNavMenu/>} />
          <Route path="/human-error" element={<HumanError/>} />
       </Routes>
    </Router>
   
    );
  }
  
  