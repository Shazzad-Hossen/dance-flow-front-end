import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import signinAnim from "../../assets/animations/signin.json";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import google from '../../assets/images/icon/google.png'
import github from '../../assets/images/icon/github.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { publicPost } from "../../utilities/apiCaller";


const SignIn = () => {

    const [eye1,setEye1]=useState(true);
    const [err,setErr]=useState(null);
    const {signInuser, googleSignin }=useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';


  const handleGooglesignin=()=>{
    googleSignin()
    .then(result=>{
      console.log(result)
      const uData={
        name:result.user.displayName,
        image: result.user.photoURL,
        email:result.user.email,
        gender:"",
        phone:"",
        address:"",
        role:"student",
        classes:0
      }

      publicPost('/createuser',uData).then(res=>{
       
        navigate(from,{replace:true});

      });

    })
    .catch(err=>{
     // console.log(err)

    })
  }



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErr(null);
    console.log(data);

    signInuser(data.email,data.password)
    .then(result=>{
      //console.log(result);
      navigate(from,{replace:true});

    })
    .catch(err=>{
      setErr((err.message).slice(22,-2))
    })
  } 

  return (
    <div className="flex justify-center items-center gap-5 flex-col md:flex-row dark:bg-slate-900 dark:text-white px-5 ">
      <Lottie className="max-w-[500px] w-full" animationData={signinAnim} loop={true} />

      <div className=" max-w-[450px] w-full">
      <form
        className=" flex flex-col gap-4  w-full mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-4xl">SIGN IN</h1>
        
        

        
        <div className="flex flex-col gap-2 w-full">
          <legend>Email *</legend>
          <input
            type="text"
            className="border-2 p-2 rounded-lg w-full dark:text-black"
            defaultValue=""
            placeholder="Your email"
            {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
          />
           {errors.email && <p className="text-red-500">Please use a valid email address</p>}
        </div>

        
        <div className="flex flex-col gap-2 w-full">
         <div className="flex items-center justify-between">
         <legend>Password *</legend>  <span className="pr-2" onClick={()=>setEye1(!eye1)}>{eye1? <AiFillEyeInvisible className="w-[25px] h-[25px]"/> : <AiFillEye className="w-[25px] h-[25px]"/>}</span>
         </div>
          <input
            type={`${eye1?'password':'text'}`}
            className="border-2 p-2 rounded-lg w-full dark:text-black"
            defaultValue=""
            placeholder="Password"
            {...register("password", { required: true,  minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/i })}
          />
            
        </div>

        
        
        {errors.password  && <p className="text-red-500">Please enter a password with at least 6 characters, a capital letter, and a special character.</p>}
        <p  className="text-red-500">{err}</p>
        <p>Forgot password? <Link className="text-[#A670C7]" to='/fpass'>Click here</Link></p>

        


       

       

        <input
          className="bg-[#a670c7] text-white p-2 w-full rounded-lg"
          type="submit"
        />
      </form>
      <p className="mt-4">New to Dance Flow? <Link  className="text-[#A670C7]" to='/signup'>Sign Up here</Link></p>

      <h1 className="text-center my-6">Or Sign in with</h1>
      <div className="flex justify-center items-center gap-5 mb-10">
        <img onClick={handleGooglesignin} className="w-[30px] cursor-pointer" src={google} alt="" />
        <img className="w-[30px] cursor-pointer" src={github} alt="" />
      </div>
      </div>
    </div>
  );
};

export default SignIn;
