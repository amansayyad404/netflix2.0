import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";


const VideoTitle = ({title, overview}) => {
  return (
    //w-screen aspect-video for removing nav bar of video from which we can go front and back
    <div className='w-[vw] absolute text-white pt-[18%] p-12'> 
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3 mt-4'>{overview}</p>
      <div className='mt-8 flex'>
        <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
            <FaPlay size="18px"/>
            <span className='ml-1'>Play</span>
            </button>
        <button className='flex items-center mx-2  px-6 py-2 bg-gray-600 opacity-55 text-black rounded-md hover:bg-opacity-80'>
            <IoIosInformationCircle size="24px"/>
            <span className='ml-1'>Watch more</span>
            </button>
      </div>
    </div>
  )
}

export default VideoTitle
