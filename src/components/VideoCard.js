import React from 'react'
import './VideoCard.css'

const baseURL= "https://image.tmdb.org/t/p/original";
 
function VideoCard({movie }) {
    return (
        <div className="videoCard">
            
        
            
            <img src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
            alt="movie poster"
             />
             
             <p>{movie.Year}</p>
             <h4>{movie.original_title || movie.title}</h4>
             <p>release date: {movie.release_date}</p>
             <p>vote count: {movie.vote_count}</p>
        </div>
    )
}

export default VideoCard
