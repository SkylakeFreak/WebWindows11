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
    var [array1,setarray]=useState([]);
    const [thispc1,setthispc]=useState(false);
    const thispcclick=()=>{
        setthispc(true);
    }
    const [chrome1,setchrome]=useState(false);
    const chromeclick=()=>{
        setchrome(true);
    }
  return (
    <div className='flex relative h-full w-full'>
        <div className='absolute h-full w-full'>
            {thispc1&&<div className='absolute flex items-center justify-center h-full w-full'>
                <Thispc setcurrent={setthispc} setminimize={setarray} array1={array1}/>
            </div>}
            {chrome1&&<div className='absolute flex items-center justify-center h-full w-full'>
                <Chrome setcurrent={setchrome} setminimize={setarray} array1={array1}/>
            </div>}
        <div id='icons-area' className='flex flex-col gap-5 p-2 h-full w-[420px]'>
            <Iconrenderer link={bin} text={"Recycle Bin"}/>
            <Iconrenderer link={chrome} text={"Google Chrome"} click={chromeclick}/>
            <Iconrenderer link={thispc} text={"This PC"} click={thispcclick}/>
            

        </div>
        
        </div>
      <Image className='h-full w-full object-cover' src={img1} alt="Background Image" />
      <div className='absolute bottom-0 inset-x-0 flex items-center justify-center h-[50px] w-full bg-gray-50'>
        <div className='h-[40px] gap-4 items-center justify-center flex flex-row w-[500px]'>
            {array1.map((image,index)=>(
                <div className='' key={index}>
                    <Image className='w-[40px] h-[40px]' src={image}></Image>

                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
