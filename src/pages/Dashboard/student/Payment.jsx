import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
   const location= useLocation();
   const data= location.state.data
  



    
    return (
        <div className='container'>
            <Helmet><title>DANCE-FLOW | MAKE PAYMENT</title></Helmet>
           <h1 className='uppercase text-center font-eczar text-3xl sm:text-5xl py-24  dark:text-white text-[#9956C1]'>Make Payment</h1>
            <Elements stripe={stripePromise}>
            <CheckoutForm data={data}/>
            </Elements>
            
        </div>
    );
};

export default Payment;