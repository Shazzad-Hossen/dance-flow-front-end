import React from 'react';
import logo from '../../assets/images/logo/df-logo.png'
import p1 from "../../assets/images/payment/cod.png";
import p2 from "../../assets/images/payment/visa.png";
import p3 from "../../assets/images/payment/mastercard.png";
import p4 from "../../assets/images/payment/americanexpress.png";
import p5 from "../../assets/images/payment/bkash.png";
import p6 from "../../assets/images/payment/nagad.png";
import p7 from "../../assets/images/payment/rocket.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#333333] text-white pt-6  '>
            <div className="container grid grid-cols-1 md:grid-cols-4 justify-between">

                {/* col1 */}
                <div className="">
                    <img className='w-[180px]' src={logo} alt="" />
                    <h1 className='font-semibold text-xl mt-6'>Payment methods</h1>
                    <div className="flex justify-start mt-5">
                    <div className="grid grid-cols-3 gap-[4px]">
                    <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className=" w-[80%] h-[90%]" src={p1} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className=" w-[80%] h-[90%]" src={p2} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className="  w-[80%] h-[90%]" src={p3} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className="  w-[80%] h-[90%]" src={p4} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className="  w-[80%] h-[90%]" src={p5} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className="  w-[80%] h-[90%]" src={p6} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  <img className="  w-[80%] h-[100%]" src={p7} alt="" />
                </div>
                </div>
                    </div>
                </div>




                {/* col2 */}
                <div className="">
                <h1 className='font-semibold text-xl mt-6 mb-6'>Support</h1>
                <div className="flex flex-col gap-1 text-[#adadad]">
                <Link to='#'>Contact Us</Link> 
                <Link to='#'>FAQ</Link> 
                <Link to='#'>Downloads</Link> 
                </div>
                
                
                </div>




                {/* col3 */}
                <div className="">
                <h1 className='font-semibold text-xl mt-6 mb-6'>About us</h1>
                <div className="flex flex-col gap-1 text-[#adadad]">
                <Link to='#'>Careers</Link> 
                <Link to='#'>Terns and Conditions</Link> 
                <Link to='#'>Privacy Policy</Link> 
                </div>
                </div>




                {/* col4 */}
                <div className="">
                <h1 className='font-semibold text-xl mt-6 mb-6'>Social</h1>
                <div className="flex flex-col gap-1 text-[#adadad]">
                <Link to='#'>Facebook</Link> 
                <Link to='#'>LinkedIn</Link> 
                <Link to='#'>Instagram</Link> 
                <Link to='#'>Youtube</Link> 
                </div>
                </div>

            </div>
            <p className='bg-[#1a1a1a] p-2 mt-10 text-center'>© Copyright 2023 | Alrights reserved by Dance Flow </p>
         
            
        </div>
    );
};

export default Footer;