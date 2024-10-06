import axios from "axios"
import { options, Upcoming_Movie } from "../utils/constant"
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();

    try {

        const res = await axios(Upcoming_Movie, options);
        dispatch(getUpcomingMovies(res.data.results));////storing upcoming-movie res data from res to redux
    }
     catch (error) {
        console.log(error);
    }


}

export default useUpcomingMovies
