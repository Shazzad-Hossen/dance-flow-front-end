import React, { useContext, useEffect, useState } from 'react';
import useHistory from '../../../hooks/useHistory';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
 const [data]=useHistory();
  


    return (
        <div className='container'>
          <Helmet><title>DANCE-FLOW | PAYMENT HISTORY</title></Helmet>
        <h1 className='uppercase text-center font-eczar text-5xl py-24  dark:text-white text-[#9956C1]'>My Paymeny History </h1>

        <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#6f548f] text-white">
              <th>SL.</th>
              <th>Class Name</th>
              <th>Payment Method</th>
              <th>Tnx Id</th>
              <th>Date</th>
            
              
              
            </tr>
          </thead>
          <tbody>
            {
              data.map((p,i)=><tr key={i} className="dark:text-white">
              <td>{i+1}</td>
              <td>{p.className}</td>
              <td>{p.method} payment</td>
              <td>{p.tnxId}</td>
              <td>{Date(p.created * 1000)}</td>
              
              
            
             
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
        
    </div>
    );
};

export default PaymentHistory;