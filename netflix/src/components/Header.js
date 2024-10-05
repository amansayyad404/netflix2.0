import React from 'react'
import axios from 'axios';
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Header = () => {
  const user = useSelector((store) => store.app.user)//we will get user details
  const dispatch = useDispatch(); //used to modifie redux state
  const navigate = useNavigate();


  const logoutHandeler = async () => { //handeling logout
    
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      if(res.data.success){//if api req is correct we will get data 
        toast.success(res.data.message);
    }
      dispatch(setUser(null));//making user null when logout
      navigate("/");
    } 
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=' absolute z-10 px-6 flex w-[100%] items-center justify-between bg-gradient-to-b from-black'>
      <img className='w-56' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png' alt='netflix-logo' />

      {user &&
        <div className='flex items-center'>
          <IoIosArrowDropdown size="24px" color='white' />
          <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
          <div className='ml-4'>
            <button onClick={logoutHandeler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search</button>
          </div>
        </div>
      }

    </div>
  )
}

export default Header
