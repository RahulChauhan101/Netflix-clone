import React from 'react'
import Vidioplay from '../../Vidioplay'
import NetflixHome from '../../Components/NetflixHome'
import YouTubePlayer from '../YouTubePlayer'
import ShowData from '../ShowData'
import Movies from '../Movies'
import MoviesSelect from '../MoviesSelect'

const Home = () => {
  return (
    <div>
    
      <Movies/>
      <MoviesSelect/>
      <ShowData/>
      <NetflixHome/>
      <Vidioplay/>
      <YouTubePlayer/>
      
    </div>
  )
}

export default Home