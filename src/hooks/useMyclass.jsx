import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { privateGet } from '../utilities/apiCaller';
import { AuthContext } from '../providers/AuthProvider';

const useMyclass = () => {

    const{ user }=useContext(AuthContext);

  
        const {data=[],refetch}=useQuery(['myclasses'],()=>{

            return privateGet(`/myclasses?email=${user?.email}`).then(res=>res);
        
          });
    
         return [data, refetch];
    
};

export default useMyclass;