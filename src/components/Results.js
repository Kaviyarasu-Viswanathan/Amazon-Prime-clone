import React from 'react'
import './Results.css'
import VideoCard from '../components/VideoCard'
import {useState, useEffect} from 'react'
import axios from '../axios/axios';
import requests from '../axios/requests'


function Resuts() {

     const [movies, setMovies] = useState([]);
     useEffect(()=> {
        async function fetchData (){
          const request = await axios.get(requests.fetchAction);
          console.log(request)
          setMovies(request.data.Search);
         return request ;
        }
        fetchData();
     },[])



    return (
        <div className="results">
            {movies.map ((movie) => (
              <VideoCard movie ={movie}/>
            ) )}
           
            
            
        </div>
    )
}

export default Resuts
