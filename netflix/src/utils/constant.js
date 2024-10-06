export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = { //tmdb api
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODk1Y2MwYWJhMzVmZTg3MzBkMzRkZGZjMDI3Y2ZkMyIsIm5iZiI6MTcyODE5MzU4My43Nzg4Mywic3ViIjoiNjcwMjIxN2VjOWExMGQ0NmVhN2QzM2NlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.QRoiclp1ipKl0Cgjd3FE6C4q5U3nV200HtOvs17z1nc'
    }
  };

  export const NOW_PLAYING_MOVIE="https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_Movie="https://api.themoviedb.org/3/movie/popular";
  export const Top_Rated_Movie ="https://api.themoviedb.org/3/movie/top_rated";
  export const Upcoming_Movie="https://api.themoviedb.org/3/movie/upcoming";


export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query="; //for searching movie by name this get req is used

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";//for poster