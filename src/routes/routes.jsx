import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes"
import DashboardLayout from "../Layouts/DashboardLayout";

import InsAddClass from "../pages/Dashboard/shared/Instructor/InsAddClass";
import MyClasses from "../pages/Dashboard/shared/Instructor/MyClasses";
import ManageClasses from "../pages/Dashboard/admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/admin/ManageUsers";
import MySelectedClasses from "../pages/Dashboard/student/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/student/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/student/PaymentHistory";
import Payment from "../pages/Dashboard/student/Payment";

import ErrorPage from "../pages/Shared/ErrorPage";

import UHome from "../pages/Dashboard/shared/UHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/signin',
          element: <SignIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/fpass',
          element: <ForgotPassword/>
        },
        {
          path: '/instructors',
          element: <Instructors/>
        },
        {
          path: '/classes',
          element: <Classes/>
        },
      ]
    },
    {
      path: 'dashboard/student',
      element: <DashboardLayout/>,
      children: [
        {
          path: 'home',
          element: <StudentRoute><UHome/></StudentRoute>

        },
        {
          path: 'selectedclasses',
          element: <MySelectedClasses/>
        },
        {
          path: 'enrolledclasses',
          element: <MyEnrolledClasses/>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory/>
        },
        {
          path: 'payment',
          element: <Payment/>
        }
      ]
    },
    {
      path: 'dashboard/instructor',
      element: <DashboardLayout/>,
      children: [
        {
          path: 'home',
          element: <InstructorRoute><UHome/></InstructorRoute>

        },
        {
          path: 'addclass',
          element: <InstructorRoute><InsAddClass/></InstructorRoute>

        },
        {
          path: 'myclasses',
          element: <InstructorRoute><MyClasses/></InstructorRoute>
        }
      ]
    },
    {
      path: 'dashboard/admin',
      element: <DashboardLayout/>,
      children: [
        {
          path: 'home',
          element: <AdminRoute><UHome/></AdminRoute>
        },
        {
          path: 'manageclasses',
          element: <AdminRoute><ManageClasses/></AdminRoute>
        },
        {
          path: 'manageusers',
          element:<AdminRoute><ManageUsers/></AdminRoute>

        },
      ]
    },
    {
      path:'*',
      element: <ErrorPage/>
    }
  ]);
