
import React, { useEffect, useState } from 'react';
import { publicGet } from '../../utilities/apiCaller';


const PopularClasses = () => {

  const[data,setData]=useState([]);
 

  useEffect(()=>{

    publicGet('/topclasses').then(res=>setData(res));

  },[])
    
    return (
       <div className="dark:bg-slate-900">
         <div className='container '>
            <h1 className='uppercase text-center font-eczar sm:text-5xl text-2xl py-24  dark:text-white text-[#9956C1]'>Popular Classes</h1>

            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">


              
      <div className="bg-red-500 h-64 rounded-lg relative"><img className=' h-full w-full rounded-lg opacity-90' src={data[0]?.image} alt="" /> <h1 className="absolute bottom-0 left-0 text-white text-xl p-6 drop-shadow-lg">{data[0]?.className}</h1></div>



      <div className="bg-blue-500 h-96 rounded-lg relative"><img className=' h-full w-full rounded-lg opacity-90' src={data[1]?.image} alt="" /> <h1 className="absolute bottom-0 left-0 text-white text-xl p-6 drop-shadow-lg">{data[1]?.className}</h1></div>

      <div className="bg-green-500 h-80 rounded-2xl relative"><img className=' h-full w-full rounded-lg opacity-90' src={data[2]?.image} alt="" /> <h1 className="absolute bottom-0 left-0 text-white text-xl p-6 drop-shadow-lg">{data[2]?.className}</h1></div>

      <div className="bg-yellow-500 h-80 rounded-3xl relative"><img className=' h-full w-full rounded-lg opacity-90' src={data[3]?.image} alt="" /> <h1 className="absolute bottom-0 left-0 text-white text-xl p-6 drop-shadow-lg">{data[3]?.className}</h1></div>

      <div className="bg-pink-500 h-64 rounded-lg relative"><img className=' h-full w-full rounded-lg opacity-90' src={data[4]?.image} alt="" /> <h1 className="absolute bottom-0 left-0 text-white text-xl p-6 drop-shadow-lg">{data[4]?.className}</h1></div>

      <div className="bg-purple-500 h-96 rounded-lg relative"><img className=' h-full w-full rounded-lg opacity-90' src={data[5]?.image} alt="" /> <h1 className="absolute bottom-0 left-0 text-white text-xl p-6 drop-shadow-lg">{data[5]?.className}</h1></div>
    </div>

            
            
        </div>
       </div>
    );
};

export default PopularClasses;