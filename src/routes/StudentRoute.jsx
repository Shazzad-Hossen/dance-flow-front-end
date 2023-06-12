import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';


const StudentRoute = ({children}) => {
     const {role,loading}= useContext(AuthContext);
     if(loading) return <LoadingSpinner/>
     if(role==='student') return children;
    
};

export default StudentRoute;