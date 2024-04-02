import React from 'react'
import InputBox from './InputBox'

export default function LoginComp({ className }){

  return (
    <div className={` ${className} flex justify-center items-center flex-col`}>

        <p className=' m-4 text-3xl text-white'>Create new account</p>
        <InputBox type="text" required={true} placeholder=" Your Name" className=" m-3 h-12 w-[80%] bg-transparent rounded-lg text-white " />
        <InputBox type="email" required={true} placeholder=" Email Address" className=" m-3 h-12 w-[80%] bg-transparent rounded-lg text-white " />
        <InputBox type="password" required={true} placeholder=" Password" className=" m-3 h-12 w-[80%] bg-transparent rounded-lg text-white " />
        <button className=" m-3 h-12 w-[80%] bg-sky-500 hover:bg-sky-600 transition-colors font-medium rounded-lg text-black " onClick={()=>{
            // handler
        }}>Continue</button>

    </div>
  )

}
