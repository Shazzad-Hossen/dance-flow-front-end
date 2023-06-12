import React, { useContext, useState } from "react";
import logo from "../assets/images/logo/df-logo.png";
import { FiAlignRight, FiX,FiMap,FiLayers, FiUsers , FiHome, FiFilePlus, FiFileText, FiLink2, FiTrello} from "react-icons/fi";

import light from "../assets/images/icon/sun.png";
import dark from "../assets/images/icon/night.png";
import useTheme from "../hooks/useTheme";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import LoadingSpinner from "../pages/Shared/LoadingSpinner";



const DashboardLayout = () => {
  const [menu, setMenu] = useState(true);
  const [theme, setTheme] = useTheme();
  const {user,role,loading}=useContext(AuthContext);
 


  const sidebarItem= <>

  <div className="pt-20">
  

    {/* Student Dashboard */}
  {role=== 'student' && <>
  <h1 className="border-b-2 border-[#333333] p-2 text-lg font-eczar mb-8">Student Dashboard</h1>
  <div className="pr-10 flex flex-col gap-2">
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/student/home'><span className="flex items-center gap-2"> <FiMap/>Dashboard</span> </NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/student/selectedclasses'><span className="flex items-center gap-2"> <FiLayers/> My Selected Classes</span> </NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/student/enrolledclasses'><span className="flex items-center gap-2"> <FiLink2/> Enrolled Classes </span></NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/student/paymenthistory'><span className="flex items-center gap-2"> <FiTrello/>Payment History</span> </NavLink>
  </div>
  
  
  </>}


   {/* Instructor Dashboard */}
 { role=== 'instructor' && <>
 
 <h1 className="border-b-2 border-[#333333] p-2 text-lg font-eczar mb-8">Instructor Dashboard</h1>
  <div className="pr-10 flex flex-col gap-2">
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/instructor/home'> <span className="flex items-center gap-2"> <FiMap/> Dashboard</span></NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/instructor/addclass'><span className="flex items-center gap-2"><FiFilePlus/>  Add Class</span></NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/instructor/myclasses'><span className="flex items-center gap-2"> <FiFileText/> My classes </span> </NavLink>
  </div>
 </>}

  {/* Admin Dashboard */}

  { role=== 'admin' &&<>
  
  <h1 className="border-b-2 border-[#333333] p-2 text-lg font-eczar mb-8">Admin Dashboard</h1>
  <div className="pr-10 flex flex-col gap-2">
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/admin/home'> <span className="flex items-center gap-2"><FiMap/> Dashboard</span>  </NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/admin/manageclasses'><span className="flex items-center gap-2"> <FiLayers/> Manage Classes</span> </NavLink>
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/dashboard/admin/manageusers'><span className="flex items-center gap-2"> <FiUsers/>Manage Users </span> </NavLink>
  </div></>}
   <br />
  <NavLink className={({isActive})=> isActive? 'bg-[#ce9ef5] py-2 px-5 drop-shadow-lg rounded-r-md  text-white':'py-2 px-5 font-medium'} to='/'><span className="flex items-center gap-2 px-5"> <FiHome/> Home </span> </NavLink>
  

  </div>

 
  </>

  if(loading) {
    return <LoadingSpinner/>
  }

  return (
    <div>
        {/* toggled sidebar */}

        <div className="lg:hidden">
        <div className={`bg-[#e2dfff] max-w-[300px] duration-500  w-full  fixed top-0  h-screen z-10 ${!menu? 'left-0':'-left-[1000px]'}`}>
          {sidebarItem}
        </div>

        </div>
        
       
        
        
          
          
          
          
     


      <div className="flex">
        <div className="hidden lg:block max-w-[200px] w-full ">
            <div className="bg-[#e2dfff] w-full h-screen sticky top-0">
                {sidebarItem}
                
            </div>
        </div>
        <div className="w-full ">
          <div className="sticky top-0 z-20">
          <div className="flex justify-between dark:bg-slate-800 bg-white py-4 px-7  shadow-lg">
           < img className="sm:w-[200px] w-[100px]" src={logo} alt="" />
            <div className="flex items-center gap-4">
              <button onClick={() => setTheme(!theme)}>
                {theme ? (
                  <img className="w-[20px] " src={dark} alt="" />
                ) : (
                  <img className="w-[20px]" src={light} alt="" />
                )}
              </button>

              {user && <img className='w-[30px] rounded-full' src={user?.photoURL} alt="" />}

              <button
                className="text-[#B799FF] lg:hidden"
                onClick={() => setMenu(!menu)}
              >
                {menu ? (
                  <FiAlignRight className="w-[30px] h-[30px]" />
                ) : (
                  <FiX className="w-[30px] h-[30px]" />
                )}
              </button>
            </div>
          </div>
          </div>

          {/* Content */}
         
       
       <Outlet/>
      
         
          

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
