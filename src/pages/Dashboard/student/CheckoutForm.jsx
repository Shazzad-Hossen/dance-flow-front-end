import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { privatePost, privatePut } from '../../../utilities/apiCaller';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({data}) => {
  const {user}=useContext(AuthContext)
    const stripe= useStripe();
    const elements= useElements();
    const [cardError,setCardError]=useState('');
    const price=parseFloat(data.price);
    const [clientSecret,setClientSecret]=useState('');
    const [processing,setProcessing]=useState(false);
    const navigate= useNavigate();
    
    
  


    useEffect(()=>{
      privatePost('/create-payment-intent',{price}).then(res=> setClientSecret(res.clientSecret));


    },[])






    const handleSubmit= async(event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }


        const card= elements.getElement(CardElement);
        if(card==null) {
            return;
        }

        const {error, paymentMethod}=await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error) {
            setCardError(error.message);
            
        }
        else {
            setCardError('');
            
        }
        setProcessing(true);
        const {paymentIntent,error:confirmError}= await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'Anonymous',
              email: user?.email || 'Unknown',
            },
          },
        });

        if(confirmError){
         // console.log(confirmError)
         Swal.fire({
          
          icon: 'error',
          title: 'Payment unsuccessfull',
          showConfirmButton: false,
          timer: 1500
        })
        }
        setProcessing(false);
       if(paymentIntent.status=== 'succeeded') {
        Swal.fire({
          
          icon: 'success',
          title: 'Payment successfull',
          showConfirmButton: false,
          timer: 1500
        })
        const tnxId= paymentIntent.id;

        const paymentHistory={
          tnxId,
          customerName: user?.displayName || 'Anonymous',
          customerEmail: user?.email || 'Anonymous',
          className: data.className,
          clsId: data.clsId,
          price:data.price,
          method:'card',
          date:paymentIntent.created,
          image:data.image,
          insName:data.insName,

          
        }

        privatePost('/payment-history',paymentHistory).then(res=>{
          if(res.acknowledged===true){
            

            const upCart={ clsId:data.clsId,
              email:user?.email 
            }

            privatePut('/cart',upCart).then(res=>{
             
              
              //reduce available seat
              privatePost('/update-class-seats',{clsId: data.clsId}).then(res=>{
                
              })

              


            })

            navigate('/dashboard/student/paymenthistory');

          }
          
        });

       

       }


        
        


    }
    return (
        <>
        <form onSubmit={handleSubmit} >
      <CardElement className='border-2 p-2 rounded-lg max-w-[500px] mx-auto'
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className='text-[#ee2727] my-2 text-center'>{cardError}</p>
      <div className="flex justify-center"><button className='bg-[#4f9fe9] hover:bg-[#267bca] py-2 px-6 rounded-lg text-white mt-4 ' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button></div>
    </form>
    
    </>
    );
};

export default CheckoutForm;