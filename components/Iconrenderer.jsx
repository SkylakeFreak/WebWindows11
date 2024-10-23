import React from 'react'
import Image from 'next/image'

function Iconrenderer({link,text,click}) {
  return (
    <div onDoubleClick={click} className='w-[80px] text-white transition-all duration-300 hover:text-black flex flex-col items-center justify-center'>
    <Image className='h-[60px] w-[60px] hover:cursor-pointer hover:opacity-70 transition-all duration-80' src={link}></Image>
    <p className='text-center text-xs'>{text}</p>
  </div>
  )
}




export default Iconrenderer