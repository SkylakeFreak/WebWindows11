"use client";
import React,{useContext, useState} from 'react'
import { UserContext } from '@/app/userContext';


function Register() {
    const { register, setRegister,condition,setcondition } = useContext(UserContext);
    
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
        <div className='flex h-full mt-10 justify-center '>
            <h1>Create Account</h1>
            <div className='flex'>
                <input type="text" />
            </div>

        </div>
    </div>
  )
}

export default Register