import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/animations/dashboard.json";
import { Helmet } from 'react-helmet-async';

const UHome = () => {
    return (
        <div className='h-[calc(100vh-200px)] flex justify-center items-center'>
          <Helmet><title>DANCE-FLOW | Dashboard</title></Helmet>
          <Lottie className='max-w-[500px] w-full' animationData={groovyWalkAnimation} loop={true} />
        </div>
    );
};

export default UHome;