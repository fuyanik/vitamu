import gV from "../../gV";
import "./payScreen.css"
import { setGlobalState } from "../../hookState";


import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { collection, doc, setDoc, getDoc, query, where,getDocs,onSnapshot   } from "firebase/firestore"; 



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_live_51KlHkRLdTjVwVxF21mzqKe98iR2Mr08Ifu1jG8HNhtOehEHqArQBCjBZ6nFqP4soxjc0o72L5NtF0FCSWaq7PalD00Zisw6XqX");


const PayScreen = () => { 

const handleClick = () => { 
    setGlobalState("isPayScreen", false);
}



const [clientSecret, setClientSecret] = useState("");

useEffect(() => {

  

  // Create PaymentIntent as soon as the page loads
  fetch("/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
}, []);

const appearance = {
  theme: 'flat',
};
const options = {
  clientSecret,
  appearance,
};


    return (
    
        <div className="pay-screen">
               
                 <div className="pay-screen-button" onClick={handleClick}>Cancel</div>
          <div className="pay-screen-main">
             

               {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}



          
          </div>
        </div>
   
    );
}
 
export default PayScreen;