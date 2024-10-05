import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [isLogin, setIsLogin] = useState(false); //this  useState is for login/signup page to show msg,weather to show new to netflix or already have acc
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  // ---------------------------------
  const loginHandeler = () => { //toggel between pages
    setIsLogin(!isLogin);
  }
  // ---------------------------------

  const getInputData = async (e) => {
    e.preventDefault();

    if (isLogin) { //if useState is login then login else register

      const user = { email, password };
      try {

        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }); //path

        console.log(res)
        if (res.data.success) {
          toast.success(res.data.message);//toast msg
        }
        navigate("/browse");// when login redirect to browse page
      } catch (error) {
        toast.error(error.response.data.message);//toast msg

        console.log(error)

      }

    } else {//register

      const user = { fullName, email, password };
      try {

        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true

        });//path

        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);//toast msg
        }
        setIsLogin(true);//it will redirect to login page as state is true

      } catch (error) {
        toast.error(error.response.data.message);//toast msg
        console.log(error);
      }
    }

    setfullName("");
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
          {!isLogin &&
            <input value={fullName} onChange={(e) => { setfullName(e.target.value) }} type='text' placeholder='name' className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ' />
          }

          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='email' className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ' />
          <input value={password} onChange={(e) => { setpassword(e.target.value) }} type='password' placeholder='password' className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ' />
          <button className='bg-red-500 mt-6 p-3 text-white font-medium rounded-sm'>{isLogin ? "Login" : "Signup"}</button>
          <p className='text-white mt-2'>{isLogin ? "New to Netflix? " : "Already have an account?"}<span onClick={loginHandeler} className=' ml-1 text-blue-500 cursor-pointer '>{isLogin ? " signup" : " login"}</span></p>
        </div>

      </form>
    </div>
  )
}

export default Login
