import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom";

import { useGlobalState } from "../../hookState";
import gV from "../../gV";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });

      


    
    } catch (error) {
     console.log(error)
    }
  };
  return (
 
 <div className="register-page ">
    
   
     
    
      <div className="form-group">
      
      
        <label>Email:</label>
        <input
          type="email"
          className="nameİnput"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
<br></br>
<br></br>
     
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="nameİnput"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      
      <br />
      <a  href="#cardo3" className="button-2 register-button"  style={{
     
      }} onClick={handleSignup}>
      Register
    
      </a>
    </div>
  );
}