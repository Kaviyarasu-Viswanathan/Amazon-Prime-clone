import React from 'react'
import './Results.css'
import VideoCard from '../components/VideoCard'
import {useState, useEffect} from 'react'
import axios from '../axios/axios';



function Resuts({selectedOption}) {

   
     const [movies, setMovies] = useState([]);
     useEffect(()=> {
        async function fetchData (){
          const request = await axios.get(selectedOption);
          console.log(request)
          setMovies(request.data.results);
         return request ;
        }
        fetchData();
     },[selectedOption]);

    return (
        <div className="results">
            {movies.map ((movie) => (
              <VideoCard movie ={movie}/>
            ) )}
           
            
            
        </div>
    )
}

export default Resuts
