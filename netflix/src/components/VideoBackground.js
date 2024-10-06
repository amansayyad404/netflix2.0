import React from 'react'

const VideoBackground = () => {
    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video'
                src="https://www.youtube.com/embed/dfLH_3QXpp4?si=1WPV_Yh93BiETk-X&autoplay=1&mute=1"//&autoplay=1 &mute=1
                title="YouTube video player"
                frameborder="0"
                allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground
