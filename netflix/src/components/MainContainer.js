import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const MainContainer = () => {
    const movie=useSelector((store)=>store.movie?.popularMovie);
    if(!movie) return; // early return in react

    const {overview, id, title} = movie[1];

  return (
    <div>
      <VideoTitle  title={title} overview={overview}/> 
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
