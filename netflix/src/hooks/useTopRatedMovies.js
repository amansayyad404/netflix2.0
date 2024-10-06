import axios from "axios"
import { options, Top_Rated_Movie } from "../utils/constant"
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();

    try {
        const res = await axios(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));////storing top-rated-movie res data from res to redux

    } 
    catch (error) {
        console.log(error);
    }


}

export default useTopRatedMovies
