import React from 'react';
import useUsers from '../../../hooks/useUsers';
import Swal from 'sweetalert2'
import { privatePut } from '../../../utilities/apiCaller';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {

  const[users,refetch]=useUsers('/users');
  
  const handleRole=(role,id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to change this use role?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {

        privatePut('/user',{role, id}).then(res=> {
          if(res.acknowledged===true){
            refetch();
            Swal.fire(
              'Success',
              'Role Successfully Updated',
              'success'
            )

          }
         
         
        })



        
      }
    })


  }




    return (
        <div className='container'>
          <Helmet><title>DANCE-FLOW | MANAGE USERS</title></Helmet>
            <h1 className='uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]'>Manage Users </h1>
            


            <div className="overflow-x-auto p-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-[#6f548f] text-white'>
        <th>SL.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      
     {
      users.map((user,i)=> <tr key={i} className='dark:text-white'>
      <td>1</td>
      <td><img className='w-[80px] h-[80px] border-2 rounded-lg shadow-lg' src={user.image} alt="" /></td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
          
              <div className="flex gap-2 items-center flex-col text-white">
                  <button onClick={()=>handleRole('student', user._id)} disabled={user.role==='student'} className={` rounded-lg p-2 w-[150px] ${user.role==='student'?'bg-[#d5b1df] cursor-not-allowed':'bg-[#a53fbe]'}`}>Make Student</button>
                  <button  onClick={()=>handleRole('instructor', user._id)} className={` rounded-lg p-2 w-[150px] ${user.role==='instructor'?'bg-[#d5b1df] cursor-not-allowed':'bg-[#a53fbe]'}`}>Make Instructor</button>
                  <button  onClick={()=>handleRole('admin', user._id)} className={`rounded-lg p-2 w-[150px] ${user.role==='admin'?'bg-[#d5b1df] cursor-not-allowed':'bg-[#a53fbe]'}`}>Make Admin</button>
              </div>
          
      </td>
      
    </tr>)
     }
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageUsers;