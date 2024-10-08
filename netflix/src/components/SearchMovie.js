import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';



const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading);
    const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));

        try {
            const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);//search move 
            const movies = res?.data?.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));//searchMovie is movie we searched,movies is array of movies
        }
         catch (error) {
            console.log(error);
        }
         finally {
            dispatch(setLoading(false));
        }

        setSearchMovie("");//after search inputbox is empty
    }

    return (
        <>
            <div className='flex justify-center pt-[10%] w-[100%] bg-black'>

                <form onSubmit={submitHandler} className='w-[50%]'>
                    <div className='flex justify-between shadow-lg border-2 p-2 border-gray-400 rounded-lg w-[100%]  mb-5'>
                       
                        <input
                            value={searchMovie}
                            onChange={(e) => {
                                setSearchMovie(e.target.value)
                            }}
                            className='w-full outline-none rounded-md text-lg bg-black text-white '
                            type="text"
                            placeholder='Search Movies...' />

                        <button className='bg-red-800 text-white rounded-md px-4 py-2'>
                            {isLoading ? "loading..." : "Search"}
                        </button>

                    </div>
                </form>

            </div>
            {
                searchedMovie ? (<MovieList title={movieName} searchMovie={true} movies={searchedMovie} />) : (<h1>Movie Not Found!!</h1>)
            }

        </>
    )
}

export default SearchMovie
