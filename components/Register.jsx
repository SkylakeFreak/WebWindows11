import React,{useContext} from 'react'
import { UserContext } from '@/app/userContext';

function Register() {
    const { register, setRegister } = useContext(UserContext);
  return (
    <div className='h-[60vh] w-[60vw] bg-[#F7FAFE]'>
        <div className='flex justify-start'>
            <button onClick={()=>{setRegister(false)}}>Back</button>
        </div>
    </div>
  )
}

export default Register