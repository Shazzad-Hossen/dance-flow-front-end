import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/df-logo.png";
import { FiAlignRight, FiX } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";
import light from "../../assets/images/icon/sun.png";
import dark from "../../assets/images/icon/night.png";
import { AuthContext } from "../../providers/AuthProvider";
import { RiShoppingCart2Fill } from "react-icons/ri";
import useCart from "../../hooks/useCart";
import useRole from "../../hooks/useRole";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [theme, setTheme] = useTheme();
  const { user, userSignout ,role } = useContext(AuthContext);

  const [cart]=useCart();


 
  
  
  

  const signOut = () => {
    userSignout();
  };

  const navItem = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "border-b-2 pb-2" : "pb-2")}
      >
        Home
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) => (isActive ? "border-b-2 pb-2" : "pb-2")}
      >
        Instructors
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) => (isActive ? "border-b-2 pb-2" : "pb-2")}
      >
        Classes
      </NavLink>

      {user ? (
        <>
         
          <NavLink
            to={`${role==='admin'?'/dashboard/admin/home': role==='instructor'? '/dashboard/instructor/home': role==='student'?'/dashboard/student/home':'/error'}`}
            className={({ isActive }) =>
              isActive ? "border-b-2 pb-2" : "pb-2"
            }
          >
            Dashboard
          </NavLink>
          <button className="pb-2 text-start" onClick={signOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? "border-b-2 pb-2" : "pb-2"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "border-b-2 pb-2" : "pb-2"
            }
          >
            Sign Up
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="shadow-xl py-4 px-7 sticky top-0 bg-white dark:bg-slate-800 z-10">
      <div className="flex justify-between items-center">
        <img className="sm:w-[200px] w-[100px]" src={logo} alt="" />

        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <div className=" flex gap-4 items-center text-[#6b6b6b]">
              {navItem}
            </div>
          </div>

          <button className="flex items-center gap-1"><RiShoppingCart2Fill /><span className="bg-[#28a018] p-1 rounded-xl text-xs text-white font-semibold relative -top-2">{cart.length}</span></button>

          <button onClick={() => setTheme(!theme)}>
            {theme ? (
              <img className="w-[20px] " src={dark} alt="" />
            ) : (
              <img className="w-[20px]" src={light} alt="" />
            )}
          </button>

          {user && (
            <img
              className="w-[30px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          )}
          <button
            className="text-[#B799FF] md:hidden"
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

      <div className="md:hidden">
        <div
          className={`absolute duration-500  ${
            menu ? "top-0 -left-[1000px]" : "top-0 left-0"
          }`}
        >
          <div className="bg-white shadow-lg w-[300px] h-screen sticky top-0">
            <div className="flex flex-col pt-5 px-10"> {navItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
