import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { privateGet } from '../utilities/apiCaller';

const useUsers = (url) => {
    const {data=[],refetch}=useQuery(['users'],()=>{

        return privateGet(url).then(res=>res);
    });

    return [data,refetch];
};

export default useUsers;