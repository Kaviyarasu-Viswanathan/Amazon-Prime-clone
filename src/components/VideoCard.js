import React from 'react'
import './VideoCard.css'

/*  const baseURL= "https://m.media-amazon.com/images/"; */
 
function VideoCard({movie }) {
    return (
        <div className="videoCard">
            
            <img src={` ${movie.M || movie.Poster}`}
            alt=""
             />
             <p>{movie.Year}</p>
             <h4>{movie.Title}</h4>
             <p>{movie.Type}</p>
        </div>
    )
}

export default VideoCard
