import axios from "axios";
import { NOW_PLAYING_MOVIE, options } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {//geting now-plaing-movie data from tmdb
    const dispatch=useDispatch();
    try {
      const res = await axios.get(NOW_PLAYING_MOVIE, options);
      dispatch(getNowPlayingMovies(res.data.results))//storing movie res data from res to redux

    } 
    catch (error) {
      console.log(error);
    }
  }

  export default useNowPlayingMovies;

  
  