import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,


    },
    reducers: {
        //actions
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        getPopularMovies:(state,action)=>{
            state.popularMovie=action.payload;
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload;
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovie=action.payload;
        }
    }
})

export const { getNowPlayingMovies,getPopularMovies,getTopRatedMovie ,getUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;