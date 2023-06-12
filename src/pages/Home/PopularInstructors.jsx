import React, { useEffect, useState } from 'react';

import InsCard from './InsCard';
import { publicGet } from '../../utilities/apiCaller';

const PopularInstructors = () => {

    const[data,setData]=useState([]);
   

    useEffect(()=>{

        publicGet('/topinstructors').then(res=> setData(res.slice(0,6)));



    },[])




    return (
        <div className="dark:bg-slate-900 pt-10">
        <div className='container '>
           <h1 className='uppercase text-center font-eczar sm:text-5xl text-2xl py-24 dark:text-white text-[#9956C1]'>Popular Instructors</h1>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-10">

            {
                data.map((ins,i)=><InsCard key={i} data={ins}/>)
            }
            






           </div>

           
           
         
           
           
       </div>
      </div>
    );
};

export default PopularInstructors;