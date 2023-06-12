import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';
import UHome from '../pages/Dashboard/shared/UHome';


const InstructorRoute = ({children}) => {
    const {role, loading}= useContext(AuthContext);
    if(loading) return <LoadingSpinner/>
    if(role==='instructor') return children;
  

    
    
};

export default InstructorRoute;