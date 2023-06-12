import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { privateGet } from '../utilities/apiCaller';
import { useQuery } from '@tanstack/react-query';

const useHistory = () => {
    const {user}=useContext(AuthContext);
    const {data=[],refetch}=useQuery([user?.email],()=>{
     return privateGet(`/payment-history/${user?.email}`).then(res=>res);
 
    })
    return [data,refetch]
};

export default useHistory;