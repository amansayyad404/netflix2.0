import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';//custom hook
import usePopularMovies from '../hooks/usePopularMovies';//custom hook
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {//whenever this page is called useEffect get calls automaticcaly
    if (!user) {//if user is not present and trying to access browse page navgate it to login page
      navigate("/")
    }

  })

  return (
    <div>
      <Header />
      <div>
        <MainContainer />
        <MovieContainer />
      </div>
    </div>
  )
}

export default Browse
