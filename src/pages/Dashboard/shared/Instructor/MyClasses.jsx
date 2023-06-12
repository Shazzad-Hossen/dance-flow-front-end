import React, { useContext, useEffect, useState } from 'react';
import { HiEye } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from '../../../../providers/AuthProvider';
import { privateGet, privatePut } from '../../../../utilities/apiCaller';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';



const MyClasses =  () => {
  const {user}=useContext(AuthContext);
  
 const [classes,setClasses]=useState([]);
 const [modal,setModal]=useState(false);
 const [courseName, setCoursename] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');
  const [clsId, setClsid] = useState('');
  const [updateClicked, setUpdateClicked] = useState(false);

  useEffect(()=>{
    privateGet(`/myclasses?email=${user?.email}`).then(res=> setClasses(res));
    setUpdateClicked(false);
  },[user,updateClicked])
  

  const handlefeedback=(feedback)=>{
    Swal.fire({
      title: feedback,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }

  const handleModal=(cls)=>{
    setCoursename(cls.className);
    setSeats(cls.seats);
    setPrice(cls.price);
    setClsid(cls._id);

   setModal(true);


  }
  

  const handleUpdate = () => {
    setModal(false);
    const updatedData = {
      clsId,
      courseName,
      seats,
      price
    };
     privatePut('/class',updatedData).then(res=>{
      if(res.acknowledged===true){
        setUpdateClicked(true);
        Swal.fire({
          
          icon: 'success',
          title: 'Details Successfully Updated',
          showConfirmButton: false,
          timer: 1500
        })
      }
     })
   
  };

  const handleCancel = () => {
    setModal(false);
  };

    
    return (
      <div>
        <Helmet><title>DANCE-FLOW | MY CLASSES</title></Helmet>
          <div className="container">
          <h1 className='uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]'>My Classes </h1>
          </div>


          {/* Table Start */}
          <div className="overflow-x-auto p-5">
<table className="table">
  {/* head */}
  <thead>
    <tr className='bg-[#6f548f] text-white'>
      <th>SL.</th>
      <th>Class Name</th>
      <th>Seats</th>
      <th>Price</th>
      <th>Students</th>
      <th>Feedback</th>
      <th>Update</th>
      <th>Ststus</th>

    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
   {
    classes.map((cls,i)=> <tr key={i} className='dark:text-white'>
    <th>{i+1}</th>
    <td>{cls.className}</td>
    <td>{cls.seats}</td>
    <td>${cls.price}</td>
    <td>0</td>
    <td className='flex dark:text-black'><button disabled={cls.status!=='denied'}  onClick={()=>handlefeedback(cls.feedback)} className={`flex items-center gap-1  p-2 rounded-lg ${cls.status!=='denied'?'bg-[#d6d6d6]':'bg-[#3b9162] text-white'}`}><HiEye className='w-[20px] h-[20px]'/> <span>View</span></button></td>
    
    <td className=''><span className='flex dark:text-black'><span onClick={()=>handleModal(cls)} className='flex items-center gap-1 bg-[#3b9162] text-white p-2 rounded-lg'><BiEdit className='w-[20px] h-[20px]'/> <span>Update</span></span></span></td>
    <td className={`${cls.status==='pending'?'text-[#f57a16] font-bold':cls.status==='denied'?'text-[#f70606] font-bold':cls.status==='approved'?'text-[#3b9162] font-bold':''}`}>{cls.status}</td>
    
   
  </tr>)
   }
    
  </tbody>
</table>
</div>
          {/* Table End */}

          {modal && <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="z-40 bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Update Information</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Course Name
          </label>
          <input
            
            type="text"
            value={courseName}
            onChange={(e) => setCoursename(e.target.value)}
            className="p-2 border-2 rounded-lg w-full dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Available Seats
          </label>
          <input
            
            type="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="p-2 border-2 rounded-lg w-full dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border-2 rounded-lg w-full dark:text-white"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
          <button
            onClick={handleCancel}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
}


          {/* Modal End */}
          
      </div>
  );
 


   
};

export default MyClasses;