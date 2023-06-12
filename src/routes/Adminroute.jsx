import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';
import UHome from '../pages/Dashboard/shared/UHome';


const AdminRoute = ({children}) => {
    const {role,loading}=useContext(AuthContext);
    if(loading) return <LoadingSpinner/>
    if(role==='admin') return children;

   

     

    
    

};

export default AdminRoute;