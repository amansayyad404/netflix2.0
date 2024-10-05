import React, { useEffect } from 'react'
import Header from './Header'
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const user=useSelector((store)=>store.app.user);
  const navigate=useNavigate();

  useEffect(()=>{//whenever this page is called useEffect get calls automaticcaly
    if(!user){//if user is not present and trying to access browse page navgate it to login page
      navigate("/")
    }
  })
  
  return (
    <div>
      <Header/>
      <div>
        
      </div>
    </div>
  )
}

export default Browse
