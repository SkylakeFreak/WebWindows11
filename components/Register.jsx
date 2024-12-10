"use client";
import React,{useContext, useState} from 'react'
import { UserContext } from '@/app/userContext';
import {QRCodeSVG} from 'qrcode.react';


function Register() {
    const { register, setRegister,condition,setcondition } = useContext(UserContext);
    const [qrcode,setqrcode]=useState(false);
    const [newidvalue,setnewidvalue]=useState(false);
    
    
  return (
    <div className={`h-[60vh] ${condition?"phasein":"phaseout"} w-[60vw] bg-[#F7FAFE] shadow-2xl`}>
        <div className='flex justify-start p-2'>
            <button onClick={()=>{
                setcondition(false)
                setTimeout(()=>{
                    setRegister(false)

                },1000)
            }}>
            <img width="32" height="32" className='hover:opacity-65 transition-all duration-100' src="https://img.icons8.com/glyph-neue/64/circled-chevron-left.png" alt="circled-chevron-left"/>
            </button>
        </div>
        <div className='flex flex-col h-auto w-full items-center gap-y-20 mt-10 justify-center '>
            <h1>Create Account</h1>
            <input onChange={(e)=>{
                setnewidvalue(e.target.value)
                setqrcode(false);
            }} placeholder='Enter New Email ID' className='text-center outline outline-1' type="text" />
            <div className='flex items-center justify-centerw-full'>
                {!qrcode&&<button className={`${newidvalue ? "cursor-pointer":"hidden"}`} onClick={()=>{
                    setqrcode(true)
                }}>Generate QR CODE</button>}
            {qrcode&&<QRCodeSVG value={newidvalue} />}

            </div>
  

        </div>
    </div>
  )
}

export default Register