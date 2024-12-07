"use client";
import React, { useState,useContext } from 'react'
import img1 from "../asset/lock.jpg"
import Image from 'next/image'
import Register from './Register';
import { UserContext } from '@/app/userContext';

function Locked() {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const form_submission=(e)=>{
        e.preventdefault();
        //api calling

    }
    const { register, setRegister } = useContext(UserContext);
  return (
    <div className='h-full w-full flex flex-col relative'>
        <Image src={img1} className="object-cover h-full w-full blur-sm"></Image>
        <div className='flex absolute items-center flex-col text-lg gap-2 justify-center h-full w-full'>
            <form onSubmit={form_submission} className='items-center flex flex-col text-lg gap-2 justify-center'>
            <input className='text-center bg-black text-white rounded-sm p-2 transition-all duration-50 hover:opacity-100 focus:opacity-100 text-opacity-100 opacity-80' type="text" placeholder='Username' />
            <input className='text-center bg-black text-white rounded-sm p-2 transition-all duration-50 hover:opacity-100 focus:opacity-100 text-opacity-100 opacity-80' type="Password" placeholder='Password' />
            <button className='bg-black text-white opacity-80 pl-10 pr-10 mt-10 transition-all duration-50 hover:opacity-100 focus:opacity-100 p-1'>Sign in</button>
            </form>
            <button onClick={()=>{
                setregister(true);
            }} className='text-lg animate-pulse text-white hover:animate-none'>Dont Have Account ?</button>
            {register&&<div className='absolute'>
                <Register/>
            </div>}
        </div>
        


    </div>
  )
}

export default Locked