import React from 'react';
import Lottie from "lottie-react";
import errorAnim from "../../assets/animations/error.json";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen' >
            <Lottie className='max-w-[800px]' animationData={errorAnim} loop={true} />

            <Link className='bg-[#459cff] p-3 font-semibold text-white rounded-md' to='/'>Back to home</Link>
            
        </div>
    );
};

export default ErrorPage;