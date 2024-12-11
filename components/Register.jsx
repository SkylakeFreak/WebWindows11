"use client";
import React,{useContext, useState} from 'react'
import { UserContext } from '@/app/userContext';
import {QRCodeSVG} from 'qrcode.react';


function Register() {
    const { register, setRegister,condition,setcondition } = useContext(UserContext);
    const [qrcode,setqrcode]=useState(false);
    const [newidvalue,setnewidvalue]=useState(false);
    const [exists,setexists]=useState(false);
    
    
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
                {exists&&<h1>Email Exists Already, will close the window</h1>
                }
                {!qrcode&&!exists&&<button className={`${newidvalue ? "cursor-pointer":"hidden"}`} onClick={()=>{
                    
                   const intervalid= setInterval(() => {
                        fetch("https://backend-gamma-ten-58.vercel.app/enrolledusers", {
                method: "POST", // POST request to match the backend
                headers: {
                  "Content-Type": "application/json", // Set the content type to JSON
                },
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  return response.json(); // Parse the JSON response
                })
                .then((data) => {
                  console.log("Emails received:", data.emails); // Log the array of emails
                  if (data.emails.includes(newidvalue)){
                    setexists(true)
                    setcondition(false);
                    
                    clearInterval(intervalid);
                    setTimeout(() => {
                        
                        setRegister(false)
                        
                    }, 2000);
                

                  } 
                  else{
                    setqrcode(true)
                  }
                })
                .catch((error) => {
                  console.error("Error fetching emails:", error.message);
                });
                        
                    }, 3000);

                    setTimeout(() => {
  clearInterval(intervalid);
  console.log("Interval cleared");
}, 20000);
                }}>Generate QR CODE</button>}
            {qrcode&&<QRCodeSVG value={newidvalue} />}
            


            </div>
  

        </div>
    </div>
  )
}

export default Register