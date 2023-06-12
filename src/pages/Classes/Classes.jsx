import React from 'react';
import ClassCard from './ClassCard';
import useClasses from '../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [classes]=useClasses('/classes');
    

    return (
        <div className='dark:bg-slate-900'>
            <Helmet><title>DANCE-FLOW | CLASSES</title></Helmet>
         
         <div className="container">
            <h1 className='uppercase text-center font-eczar text-3xl sm:text-5xl py-24  dark:text-white text-[#9956C1]'>Classes</h1>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-10">
                {
                    classes.map((cls,i)=> <ClassCard key={i} data={cls}/>)
                }
               
                
            </div>
            </div>
           
            
        </div>
    );
};

export default Classes;