import React, { useEffect, useState } from 'react';
import frame from '../../assets/images/bg/Frame.png'
import { Typewriter } from 'react-simple-typewriter'
import { publicGet } from '../../utilities/apiCaller';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [instructor,setInstructor]=useState([]);
   

    useEffect(()=>{

        publicGet('/instructors').then(res=>setInstructor(res))

    },[])
    return (
        <div className="dark:bg-slate-900">
            <Helmet><title>DANCE-FLOW | INSTRUCTORS</title></Helmet>
            <div className='container '>

            <h1 className='uppercase text-center font-eczar text-3xl sm:text-5xl py-24  dark:text-white text-[#9956C1]'>Instructors</h1>


            {
                instructor.map((ins,i)=> 
                <div key={i} className="flex justify-start items-center gap-5 flex-col md:flex-row">
                    {/* Image */}
                
                    <div className="relative w-[200px] sm:w-[400px] h-[200px] sm:h-[400px]">
                    <div className="absolute w-[200px] sm:w-[400px]  h-[200px] sm:h-[400px]  top-0 left-0 ">
                        <div className="flex justify-center items-center h-full ">
                            <img className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]' src={ins.image} alt="" />
                        </div>
                    </div>
                    <div className="absolute w-[200px] sm:w-[400px] h-[200px] sm:h-[400px]  top-0 left-0 ">
                        <div className="flex justify-center items-center h-full ">
                            <img className='w-[200px] sm:w-[400px] h-[200px] sm:h-[400px]' src={frame} alt="" />
                        </div>
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-col gap-2 dark:text-white  w-full md:w-auto">
                    <h1 className='text-3xl font-eczar'>{ins.name}</h1>
                    <h1 className='text-2xl font-light'>Email: {ins.email} </h1>
                    <h1 className='text-2xl font-light'>Total classes: {ins.classes} </h1>
                    <button className='bg-[#e9e9e9] p-2 border-[1px] rounded-lg dark:text-black mt-5 shadow-lg text-lg font-eczar'>View classes</button>
                
                
                
                </div>
                
                </div>
                )
            }




</div>
        </div>
    );
};

export default Instructors;