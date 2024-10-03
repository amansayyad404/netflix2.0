import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isLogin, setIsLogin] = useState(false); //this  useState is for login/signup page to show msg,weather to show new to netflix or already have acc
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");



  // ---------------------------------
  const loginHandeler =()=>{ //toggel between pages
    setIsLogin(!isLogin);
  }
  // ---------------------------------

  const getInputData =(e)=>{
    e.preventDefault();
    setFullname("");
    setEmail("");
    setpassword("");
  }

  return (
    <div>
      <Header />
      <div className=' absolute'>
        <img className='w-[100vw] h-[100vh]' src='/images/netflix-bg.jpeg' alt='banner' />
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute  rounded-md bg-black opacity-90'>
     
        <h1 className='text-3xl mb-5 font-bold text-white'>{isLogin ? "Login" : "Signup"}</h1>
     
        <div className='flex flex-col'>
     
          {/* show name input only when regester /dont show in login page */}
          { !isLogin &&
          <input value={fullname} onChange={(e)=>{setFullname(e.target.value)}}  type='text'     placeholder='name' className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ' />
          }
     
          <input value={email}    onChange={(e)=>{setEmail(e.target.value)}}     type='email'    placeholder='email' className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ' />
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type='password' placeholder='password' className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ' />
            <button className='bg-red-500 mt-6 p-3 text-white font-medium rounded-sm'>{isLogin?"Login" : "Signup"}</button>
          <p className='text-white mt-2'>{isLogin ? "New to Netflix? ":"Already have an account?"}<span onClick={loginHandeler} className=' ml-1 text-blue-500 cursor-pointer '>{isLogin? " signup" :" login"}</span></p>
        </div>
     
      </form>
    </div>
  )
}

export default Login
