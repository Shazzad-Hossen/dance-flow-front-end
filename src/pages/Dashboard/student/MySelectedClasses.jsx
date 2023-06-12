import React from "react";
import useCart from "../../../hooks/useCart";
import Swal from 'sweetalert2';
import { privateDelete } from "../../../utilities/apiCaller";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const MySelectedClasses = () => {
  const [classes,refetch]= useCart();
  const navigate = useNavigate();

  


  

  const handlePayment=(cls)=>{
    navigate('/dashboard/student/payment', { state: { data: cls } });
  }


 const handleDelete=(id)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      privateDelete(`/cart/${id}`).then(res=>{
        if(res.acknowledged===true) {
          refetch();
          Swal.fire(
            'Deleted!',
            'Class successfully deleted',
            'success'
          )

        }
      });





      
    }
  })
 }



  return (
    <div className="container">
      <Helmet><title>DANCE-FLOW | SELECTED CLASSES</title></Helmet>
      <h1 className="uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]">
        My Selected Classes{" "}
      </h1>

      <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#6f548f] text-white">
              <th>SL.</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Action</th>
              
              
            </tr>
          </thead>
          <tbody>


            {classes.map((cls,i)=> <tr key={i} className="dark:text-white">
              <td>{i+1}</td>
              <td>{cls.className}</td>
              <td>{cls.insName}</td>
              <td><span className="flex gap-2">
                <button onClick={()=>handleDelete(cls._id)} className="bg-[#b91e1e] p-2 rounded-[4px] text-white shadow-md">Delete</button>
                <button onClick={()=>handlePayment(cls)} className="bg-[#168f45] p-2 rounded-[4px] text-white shadow-md w-[50px]">Pay</button>
                </span></td>
            
             
            </tr>)}
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
