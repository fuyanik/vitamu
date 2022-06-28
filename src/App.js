import React from 'react';
import Home from "./pages/Home"
import Form from "./pages/Form"
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link, NavLink} from 'react-router-dom';






// <Route path="/" component={Home} />




export default function App() {

    return (

      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
           
           
 
      </Routes>
      
    </BrowserRouter>
   
    );
  }
  