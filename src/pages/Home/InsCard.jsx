import React from 'react';
import bg from '../../assets/images/bg/bg.jpg'


const InsCard = ({data}) => {
    return (
        <div className='flex justify-center'>
            <div className=" shadow-lg rounded-b-lg">
                <div className="h-[300px] relative ">
                    <img className='object-cover h-full rounded-t-lg' src={bg} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                    <img className='w-[100px] h-[100px] rounded-full border-2 p-1 ' src={data.image} alt="" />
                    </div>
                </div>
                <div className="h-[200px] px-2 py-10 bg-white dark:bg-slate-950 text-center dark:text-white rounded-b-lg">
                    <h1 className='text-2xl font-eczar'>{data.name}</h1>
                    <p className='text-lg font-semibold'> Cources Taken : <span>{data.classes}</span> </p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default InsCard;