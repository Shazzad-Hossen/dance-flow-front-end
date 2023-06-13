import React, { useEffect, useState } from 'react';

import InsCard from './InsCard';
import { publicGet } from '../../utilities/apiCaller';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const PopularInstructors = () => {

    const[data,setData]=useState([]);
    const { scrollY } = useViewportScroll();
    const opacity = useTransform(scrollY, [0, 500], [0, 1]);
   

    useEffect(()=>{

        publicGet('/topinstructors').then(res=> setData(res.slice(0,6)));
        const handleScroll = () => {
            // Your custom scroll logic if needed
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };



    },[])




    return (
        <div className="dark:bg-slate-900 pt-10">
        <div className='container '>
           <h1 className='uppercase text-center font-eczar sm:text-5xl text-2xl py-24 dark:text-white text-[#9956C1]'>Popular Instructors</h1>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-10">

            {
                data.map((ins,i)=> <motion.div  
                key={i}
                className="class-card"
                style={{ opacity: opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              ><InsCard  data={ins}/> </motion.div>)
            }
            






           </div>

           
           
         
           
           
       </div>
      </div>
    );
};

export default PopularInstructors;