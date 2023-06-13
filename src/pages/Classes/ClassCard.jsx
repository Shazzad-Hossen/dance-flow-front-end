import React, { useContext } from 'react';
import bg from '../../assets/images/bg/dancebg.jpg'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { privatePost } from '../../utilities/apiCaller';
import useCart from '../../hooks/useCart';
import useRole from '../../hooks/useRole';

const ClassCard = ({data}) => {
    const {user}=useContext(AuthContext);
    const [,refetch]= useCart();
    const [role]=useRole();

    const handleEnroll=(cls)=>{
        if(user){
            
            const body= {
                clsId: cls._id,
                className:cls.className,
                image: cls.image,
                insEmail:cls.insEmail,
                insName:cls.insName,
                price:cls.price,
                email: user.email,
                payment: 'none'
            }


        privatePost('/cart',body).then(res=>{
            console.log(res)
            if(res.acknowledged===true){

                Swal.fire({
              
                    icon: 'success',
                    title: 'Class selected',
                    showConfirmButton: false,
                    timer: 1500
                  })

                refetch()
            }

            if(res.error===true && res.message==='Already in cart'){
                Swal.fire({
              
                    icon: 'error',
                    title: 'You already selected or enrolled to this class',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
            
        })


         
           
        }
        else {
            Swal.fire({
              
                icon: 'warning',
                title: 'You need to sign in first ',
                showConfirmButton: false,
                timer: 1500
              })

        }
    }
    return (
        <div className='flex justify-center'>
            <div className=" shadow-lg rounded-b-lg">
                <div className="h-[300px] max-w-[400px] w-full relative ">
                    <img className='object-cover h-full w-[400px] rounded-t-lg' src={data.image} alt="" />
                    
                </div>
                <div className={`min-h-[250px]  px-5 py-10 dark:bg-slate-950 text-start dark:text-white rounded-b-lg ${data.seats===0?'bg-red-500 dark:bg-red-400':'bg-white dark:bg-white'} `}>
                    <h1 className='text-2xl font-eczar'>{data.className}</h1>
                    <p className='text-lg font-semibold'> Instructor: <span> {data.insName}</span> </p>
                    <p className='text-lg font-semibold'>Available Seats: <span>{data.seats}</span> </p>
                    <p className='text-lg font-semibold'>Fees: <span>${data.price}</span> </p>

                    <button disabled={data.seats===0 ||role==='admin' || role==='instructor' } onClick={()=>handleEnroll(data)} className={`bg-[#65ad65] text-white py-1 px-2 rounded-md `}>Select</button>
                </div>
            </div>
            
        </div>
    );
};

export default ClassCard;