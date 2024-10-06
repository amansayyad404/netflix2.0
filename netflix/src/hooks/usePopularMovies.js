import axios from 'axios'
import { options, Popular_Movie } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/movieSlice';

const usePopularMovies = async () => {
    const dispatch=useDispatch();

    try {
        const res=await axios(Popular_Movie,options);
      dispatch(getPopularMovies(res.data.results))//storing popular-movie res data from res to redux


    }
    catch (error) {
        console.log(error)
    }
}

export default usePopularMovies
