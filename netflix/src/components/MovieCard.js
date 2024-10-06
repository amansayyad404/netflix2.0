import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'

const MovieCard = ({ posterPath,movieId}) => {


    if (posterPath === null) return null;//if no poster then return null

  return (
    <div className='w-48 pr-2'>
        {/* path for getting movies first go to tmdb then / posterpath */}
         <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
    </div>
  )
}

export default MovieCard
