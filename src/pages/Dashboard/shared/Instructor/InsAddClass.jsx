import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { privatePost } from '../../../../utilities/apiCaller';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const InsAddClass = () => {
    const {user,loading, userSignout }=useContext(AuthContext);
    const navigate = useNavigate();


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const img_hosting_token=import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
    const image_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
   



    const onSubmit = data => {
        console.log(data.image.length)
        
       
        const formData= new FormData();
        formData.append('image',data.image[0]);
        fetch(image_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgResponse=> {
           
            const classDetails={
                className: data.className,
                image: imgResponse.data.display_url,
                insName: user.displayName,
                insEmail: user.email,
                seats: parseInt(data.seats),
                price: data.price,
                status: 'pending',
                students:0


            }
            privatePost('/addclass',classDetails)
            .then(data=>{
                if(data.acknowledged===true){
                   
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully added',
                        showConfirmButton: false,
                        timer: 1500
                      })

                } else {
                    

                    Swal.fire({
                        icon: 'error',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                      });

                      userSignout();
                      navigate("/signin");


                    

                }
                

            });
            


        })


       
    }

    if(loading) {
        return <h1>Loading</h1>
    }


    return (
        <div className='dark:bg-slate-900'>
            <Helmet><title>DANCE-FLOW | ADD CLASSES</title></Helmet>
            <div className="container">

            <h1 className='uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]'>Add Class</h1>

               

                    
                
            

                    <form className='max-w-[500px] w-full mx-auto flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col gap-2">
                        <label className='font-eczar text-xl dark:text-white'> Class Name</label>
                        <input className='border-2 p-2 rounded-lg w-full' placeholder='Enter class name'  {...register("className",{required: true, minLength: 5 })} />
                    </div>
                    {errors.className && errors.className.type === 'required' && (
          <p className='text-red-600'>Name is required.</p>
        )}
        {errors.className && errors.className.type === 'minLength' && (
          <p  className='text-red-600'>Name should be at least 5 characters long.</p>
        )}
                    <div className="flex flex-col gap-2">
                        <label className='font-eczar text-xl dark:text-white'> Image</label>
                        <input type='file' className=' p-2 rounded-lg w-full dark:text-white'   {...register("image",{required: 'Image is required.',
            validate: {
              fileFormat: (value) =>
                value[0]?.type.includes('image') ||
                'Invalid file format. Only images are allowed.',
            }})} />
                    </div>
                    {errors.image && <p>{errors.image.message}</p>}

                    <div className="flex flex-col gap-2">
                        <label className='font-eczar text-xl dark:text-white'> Instructor Name</label>
                        <input className='border-2 p-2 rounded-lg w-full' defaultValue={user.displayName} disabled  {...register("insName")} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className='font-eczar text-xl dark:text-white'> Instructor Email</label>
                        <input className='border-2 p-2 rounded-lg w-full' defaultValue={user.email} disabled  {...register("insEmail")} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className='font-eczar text-xl dark:text-white'> Available Seats</label>
                        <input className='border-2 p-2 rounded-lg w-full' placeholder='Available seats'  {...register("seats",{required: true, pattern: /^[0-9]+$/})} />
                    </div>
                    {errors.seats && errors.seats.type === 'required' && (
          <p className='text-red-600'>Seats is required.</p>
        )}
        {errors.seats && errors.seats.type === 'pattern' && (
          <p  className='text-red-600'>Seats should be a valid number.</p>
        )}


                    <div className="flex flex-col gap-2">
                        <label className='font-eczar text-xl dark:text-white'> Price</label>
                        <input className='border-2 p-2 rounded-lg w-full' placeholder='price'  {...register("price",{required: true,  pattern: /^[0-9]+$/})} />
                    </div>
                    {errors.price && errors.price.type === 'required' && (
          <p className='text-red-600'>Price is required.</p>
        )}
        {errors.price && errors.price.type === 'pattern' && (
          <p className='text-red-600'>Price should be a valid number.</p>
        )}
  
  
  
  
  
  
                  
      
      
    

      
      
      <div className=""><button className='bg-[#CE9EF5] py-2 px-5 text-white rounded-lg'>Add</button></div>
    </form>


                    





               
            </div>
          
        </div>
    );
};

export default InsAddClass;