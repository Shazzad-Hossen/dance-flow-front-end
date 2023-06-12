import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const ForgotPassword = () => {
    const {resetPassword}=useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        resetPassword(email)
        .then(result=>{
            Swal.fire(
                'Success',
                'Please check your inbox',
                'success'
              )
           
           
        })
        .catch(err=>{
            Swal.fire(
                'Opps!',
                'User Not Found',
                'error'
              )
           
        })
       

    }
    return (
        <div className='px-5'>
            <h1 className='text-4xl text-center my-10'>Reset Password</h1>
            <form onSubmit={handleSubmit} className="max-w-[500px] w-full mx-auto flex items-center mb-10">
                <input className='border-2 rounded-l-lg p-2 w-full border-r-0' type="email" name="email" />
                <button className='bg-[#a670c7] p-2 border-[#a670c7] border-2 rounded-r-lg text-white font-semibold px-4' >Reset</button>
            </form>
            
        </div>
    );
};

export default ForgotPassword;