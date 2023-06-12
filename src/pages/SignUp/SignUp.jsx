import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import signupAnim from "../../assets/animations/signup.json";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import google from '../../assets/images/icon/google.png'
import github from '../../assets/images/icon/github.png'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { publicPost } from "../../utilities/apiCaller";



const SignUp = () => {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();

    const [eye1,setEye1]=useState(true);
    const [eye2,setEye2]=useState(true);
    const [err,setErr]=useState(null);

    const {SignUpuser, updateUser, googleSignin, githubSignin}= useContext(AuthContext);


    const handleGooglesignin=()=>{
      googleSignin()
      .then(result=>{
        //console.log(result)
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
         
          navigate('/');

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
    setErr(null)
    if(data.password!==data.confpassword) {
        setErr('Confirm password did not match');

    }
    SignUpuser(data.email,data.password)
    .then(result=>{

      updateUser(data.name,data.photo)
      .then(result=>{
        let imgUrl= data.photo===''? 'https://srcwap.com/wp-content/uploads/2022/08/no-avatar.webp': data.photo;
        const uData={
          name:data.name,
          image: imgUrl,
          email:data.email,
          gender:data.gender,
          phone:data.phone,
          address:data.address,
          role:"student",
          classes:0
        }

        publicPost('/createuser',uData).then(res=>{
          console.log(res);
          if(res.acknowledged===true) {
            Swal.fire({
             
              icon: 'success',
              title: 'Sign Up Successfull',
              showConfirmButton: false,
              timer: 1500
            })
          }

        });
        navigate('/');

       

      })
      .catch(err=>{
        //console.log(err);
      })
     

    })
    .catch(err=>{

     
      Swal.fire({
        title: `${(err.message).slice(22,-2)}`,
        icon: 'error ',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })


    })
    
    //console.log(data);

  } 

  return (
    <div className="flex justify-center items-center gap-5 flex-col md:flex-row dark:bg-slate-900 dark:text-white px-5 ">
      <Lottie className="max-w-[500px] w-full" animationData={signupAnim} loop={true} />

      <div className=" max-w-[450px] w-full">
      <form
        className=" flex flex-col gap-4  w-full mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-4xl">SIGN UP</h1>
        <div className="flex flex-col gap-2 w-full items-start">
          <legend>Name *</legend>
          <input
            type="text"
            className="border-2 p-2 rounded-lg w-full dark:text-black"
            defaultValue=""
            placeholder="Your name"
            {...register("name", { required: true, minLength:5 })}
          />
          {errors.name && <p className="text-red-500">Name must be more than 5 charecter</p>}
           
        </div>
        <div className="flex flex-col gap-2 w-full">
          <legend>Gender </legend>
          <div className="flex items-center gap-2 flex-wrap">
            <label className="flex gap-2 items-center">
              <input  type="radio" value="male" {...register("gender")} />
              Male
            </label>

            <label className="flex gap-2 items-center">
              <input type="radio" value="female" {...register("gender")} />
              Female
            </label>

            <label className="flex gap-2 items-center">
              <input type="radio" value="other" {...register("gender")} />
              Other
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <legend>Phone </legend>
          <input
            type="tel"
            className="border-2 p-2 rounded-lg w-full dark:text-black"
            defaultValue=""
            placeholder="Your phone number"
            {...register("phone")}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <legend>Address </legend>
          <input
            type="text"
            className="border-2 p-2 rounded-lg w-full dark:text-black"
            defaultValue=""
            placeholder="Your address"
            {...register("address")}
          />
        </div>

        </div>
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

        <div className="flex items-center gap-1 w-full flex-col sm:flex-row">
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

        <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
         <legend>Confirm assword *</legend>  <span className="pr-2" onClick={()=>setEye2(!eye2)}>{eye2? <AiFillEyeInvisible className="w-[25px] h-[25px]"/> : <AiFillEye className="w-[25px] h-[25px]"/>}</span>
         </div>
          <input
            type={`${eye2?'password':'text'}`}
            className="border-2 p-2 rounded-lg w-full dark:text-black"
            defaultValue=""
            placeholder="confirm password"
            {...register("confpassword", { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/i })}
          />
        </div>
        </div>
        {errors.password? <p className="text-red-500">Please enter a password with at least 6 characters, a capital letter, and a special character.</p> : errors.confpassword&& <p className="text-red-500">Confirm password mustbe at least 6 characters, a capital letter, and a special character.</p>}
        
        


        <div className="flex flex-col gap-2 w-full dark:text-black">
          <legend>Photo Url</legend>
          <input
            type="text"
            className="border-2 p-2 rounded-lg w-full"
            defaultValue=""
            placeholder="Your photo url"
            {...register("photo")}
          />
        </div>

      

        <input
          className="bg-[#a670c7] text-white p-2 w-full rounded-lg"
          type="submit"
        />
      </form>
      <p className="mt-4">Already have an account? <Link  className="text-[#A670C7]" to='/signin'>Sign In here</Link></p>

      <h1 className="text-center my-6">Or Sign in with</h1>
      <div className="flex justify-center items-center gap-5 mb-10">
        <img onClick={handleGooglesignin} className="w-[30px] cursor-pointer" src={google} alt="" />
        <img className="w-[30px] cursor-pointer" src={github} alt="" />
      </div>
      </div>
    </div>
  );
};

export default SignUp;
