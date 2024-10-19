"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../asset/wallpaper.jpg';
import bin from "../asset/bin.png"
import chrome from "../asset/chrome.png"
import thispc from "../asset/thispc.png"
import Iconrenderer from './Iconrenderer';
import Thispc from './Thispc';
import Chrome from './Chrome';
function Main() {
    const [currentthispcinstance,setthispcinstance]=useState(null);
    function generateUUIDLikeString() {
        const array = new Uint8Array(8);
        crypto.getRandomValues(array); // Fills the array with cryptographically secure random numbers
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('').slice(0, 8);
      }
      
      console.log(generateUUIDLikeString()); // Example output: '3e7b1c9d'
      
    var [array1,setarray]=useState([]);
    console.log(array1,"check")
    const [thispc1,setthispc]=useState(false);
    const thispcclick=()=>{
        setthispcinstance(generateUUIDLikeString());
        setthispc(true);
    }
    const [chrome1,setchrome]=useState(false);
    const chromeclick=()=>{
        setthispcinstance(generateUUIDLikeString());
        setchrome(true);
    }
  return (
    <div className='flex relative h-full w-full'>
        <div className='absolute h-full w-full'>
            {thispc1&&<div className='absolute flex items-center justify-center h-full w-full'>
                <Thispc setcurrent={setthispc} setminimize={setarray} array1={array1} instanceid={currentthispcinstance}/>
            </div>}
            {chrome1&&<div className='absolute flex items-center justify-center h-full w-full'>
                <Chrome setcurrent={setchrome} setminimize={setarray} array1={array1} instanceid={currentthispcinstance}/>
            </div>}
        <div id='icons-area' className='flex flex-col gap-5 p-2 h-full w-[420px]'>
            <Iconrenderer link={bin} text={"Recycle Bin"}/>
            <Iconrenderer link={chrome} text={"Google Chrome"} click={chromeclick}/>
            <Iconrenderer link={thispc} text={"This PC"} click={thispcclick} />
            

        </div>
        
        </div>
      <Image className='h-full w-full object-cover' src={img1} alt="Background Image" />
      <div className='absolute bottom-0 inset-x-0 flex items-center justify-center h-[50px] w-full bg-gray-50'>
        <div className='h-[40px] gap-4 items-center justify-center flex flex-row w-[500px]'>
            {array1.map((imageinstance,index)=>(
                <div onClick={()=>{
                    console.log("Clicked rider",imageinstance[0])
                    if (imageinstance[2]==="Thispc"){
                        setthispcinstance(imageinstance[0]);
                        console.log("true called")
                        setthispc(true);

                    }

                }} className='flex flex-row hover:opacity-70 hover:cursor-pointer transition-all duration-150' key={index}>
                    <Image className='w-[40px] h-[40px]' src={imageinstance[1]}></Image>
                    <p>{imageinstance[0]}</p>

                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
