import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        toggle:false,
        trailerMovie:null, 



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
        },
        setToggle:(state)=>{//toggle state
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        },
    }
})

export const { getNowPlayingMovies,getPopularMovies,getTopRatedMovie ,getUpcomingMovies,setToggle,getTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer;