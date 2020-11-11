import React from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Results from '../components/Results'


function Home() {
      
    return (
        <div className="home">
            <div className="carousel">
                
                 <Carousel>
                <div>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BoysS2AllEpisodesAvailable/5d233d54-ffe4-4b2d-bcce-57ac8567bedd._UR3000,600_SX1500_FMwebp_.jpg" alt="banner"/>
                   
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Mikhael_Malyalam_Gold/753c2d0b-54ba-49a4-9c00-728f8d057892._UR3000,600_SX1500_FMwebp_.jpg" alt="banner"/>
                    
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_DarbarTamil/dafdb335-db9a-46a6-9218-345c7c6de8ed._UR3000,600_SX1500_FMwebp_.jpg" alt="banner"/>
             
                </div>
            </Carousel>
            <div className="home__info">
                <p>Weekly Trending movies</p>
                 <div className="home__row1">
                     <Results/>

                 </div>
            </div>
            </div>
        </div>
    )
}

export default Home
