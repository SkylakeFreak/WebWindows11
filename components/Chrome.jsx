import React from 'react'
import chrome from "../asset/chrome.png"


function Chrome({setcurrent,setminimize,array1,instanceid}) {
    const onclick=()=>{
        setcurrent(false);
    }
    const onclickmini=()=>{
        setminimize([...array1,[instanceid,chrome,"chrome"]]);
        setcurrent(false);
    }
  return (
    <div className='h-[60vh] w-[60vw] flex-col outline outline-1 flex bg-white'>
    <div className='h-[50px] flex items-center justify-end w-full'>
        <div onClick={()=>{
            onclick();
        }} className='text-white mr-1 hover:cursor-pointer hover:opacity-80 transition-all duration-150'><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/multiply-2.png" alt="multiply-2"/></div>
         <div onClick={()=>{
                onclickmini();
            }} className='text-white mr-1 hover:cursor-pointer hover:opacity-80 transition-all duration-150'><img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/minimize-window.png" alt="multiply-2"/></div>
    </div>
    <div id='boxarea' className='h-full w-full items-center justify-center flex flex-col'>
            <p>Google Chrome</p>
            <p>{instanceid}</p>
        </div>
</div>
  )
}

export default Chrome