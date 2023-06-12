import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { privateGet } from '../utilities/apiCaller';

const useRole = () => {
    const {user}=useContext(AuthContext);
    const {data=null,isLoading}=useQuery(['role',user?.email],()=>{
     return privateGet(`/role/${user?.email}`).then(res=>res);
 
    }) 
    return [data?.role]
};

export default useRole;