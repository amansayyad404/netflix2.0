import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';



const MovieCard = ({ posterPath,movieId}) => {
    const dispatch = useDispatch();

    if (posterPath === null) return null;//if no poster then return null
    
    const handleOpen = () => {
        dispatch(getId(movieId));
        dispatch(setOpen(true));
      }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
        {/* path for getting movies first go to tmdb then / posterpath */}
         <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
    </div>
  )
}

export default MovieCard
