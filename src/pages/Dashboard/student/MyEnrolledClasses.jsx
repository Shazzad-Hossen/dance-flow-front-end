import React from 'react';
import useHistory from '../../../hooks/useHistory';
import { Helmet } from 'react-helmet-async';

const MyEnrolledClasses = () => {
  const [data]=useHistory();


    return (
        <div className='container'>
          <Helmet><title>DANCE-FLOW | ENROLLED CLASSES</title></Helmet>
        <h1 className='uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]'>My Enrolled Classes </h1>

        <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#6f548f] text-white">
              <th>SL.</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            data.map((en,i)=> <tr key={i} className="dark:text-white">
            <td>{i+1}</td>
            <td><img className='w-[100px] h-[50px] rounded-lg shadow-lg border-2' src={en.image} alt="" /></td>
            <td>{en.className}</td>
            <td>{en.insName}</td>

          </tr>)
           }
          </tbody>
        </table>
      </div>
        
    </div>
    );
};

export default MyEnrolledClasses;