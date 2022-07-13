
import Home from "./pages/Home"
import Form from "./pages/Form"


import MobileNavMenu from './pages/MobileNavMenu/mobileNavMenu';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {Routes} from 'react-router-dom';






// <Route path="/" component={Home} />




export default function App() {

    return (

      <Router>
        <Routes> 
     <Route path="/" element={<Home/>} />
<Route path="/form" element={<Form/>} />
<Route path="/mobileNavMenu" element={<MobileNavMenu/>} />
</Routes>
    </Router>
   
    );
  }
  
  