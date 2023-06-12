import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import FAQ from './FAQ';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    
    return (
        <div className='mb-10'>
            <Helmet><title>DANCE-FLOW | HOME</title></Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <FAQ/>
         
            
        </div>
    );
};

export default Home;