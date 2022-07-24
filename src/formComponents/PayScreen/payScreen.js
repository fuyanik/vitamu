import gV from "../../gV";
import "./payScreen.css"
import { setGlobalState } from "../../hookState";


import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51LOrQYKGr3XuaAt4k9NHq0fW5AMPq71nMA6c9SIPVvRXadetwvACfgR4Fk5gk6zs6hnHrH0VdqevAoMHa8f9s2PB00txc9mDlI");


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