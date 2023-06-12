import { useQuery } from '@tanstack/react-query';
import { privateGet } from '../utilities/apiCaller';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useClasses = (url) => {
    const{user}=useContext(AuthContext);

   
        const {data=[],refetch}=useQuery(['classes'],()=>{

            return privateGet(url).then(res=>res);
        
          });
    
         return [data, refetch];
    
     

};

export default useClasses;