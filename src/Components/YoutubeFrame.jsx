import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

function YoutubeFrame() {
    const { musicUrl } = useContext(MyContext);
    const videoId = musicUrl.substring(
      musicUrl.indexOf("=") + 1, 
      musicUrl.lastIndexOf("&")
  );
    return (
        <div className='video-container'>
            <iframe width="350" height="197" title='youtube embed'
                src={`https://www.youtube.com/embed/${videoId}`}>
            </iframe>
        </div>
    )
}

export default YoutubeFrame