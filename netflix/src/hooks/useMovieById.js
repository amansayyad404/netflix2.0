import axios from "axios";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { getTrailerMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieById = async (movieId) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getMovieById = async () => {
        try {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);//path is for getting video of that movie based on id passed from mainContainer
  
          console.log(res.data.results);
          const trailer = res?.data?.results?.filter((item) => { //res.data.resylt is array so we are filtering only item whose type is Trailer
            return item.type === "Trailer";
          })

          dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));//if trailer is present then we will show trailer of 0th loaction,and if not then any movie
        } 
        catch (error) {
          console.log(error);
        }
      }
      getMovieById();//calling getMovieById function
    },[])
}

export default useMovieById
