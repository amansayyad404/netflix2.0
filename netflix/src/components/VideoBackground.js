import React from 'react'
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';
import store from '../redux/store';

const VideoBackground = ({ movieId, bool }) => {
    const trailerMovie = useSelector((store) => store.movie.trailerMovie);

    useMovieById(movieId);
    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video"} `} //if video is popup then bool is true and use w-100% else use old styling
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

            </iframe>
        </div>
    )
}

export default VideoBackground
