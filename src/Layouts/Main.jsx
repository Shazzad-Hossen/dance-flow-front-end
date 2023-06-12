import React, { useEffect } from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Main = () => {
  
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;