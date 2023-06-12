import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { privateGet } from '../utilities/apiCaller';
import { AuthContext } from '../providers/AuthProvider';


const useCart = () => {
    const {user}=useContext(AuthContext);
   const {data=[],refetch}=useQuery(['cart',user?.email],()=>{
    return privateGet(`/cart/${user?.email}`).then(res=>res);

   })
   return [data,refetch]
};

export default useCart;