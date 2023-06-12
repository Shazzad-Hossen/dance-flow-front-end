import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animations/loading.json";

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

      <Lottie className='w-[200px]' animationData={groovyWalkAnimation} loop={true} />
            
        </div>
    );
};

export default LoadingSpinner;