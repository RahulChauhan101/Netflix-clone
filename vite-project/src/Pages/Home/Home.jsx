import React from 'react'
import Vidioplay from '../../Vidioplay'
import NetflixHome from '../../Components/NetflixHome'
import YouTubePlayer from '../YouTubePlayer'
import ShowData from '../ShowData'
import Movies from '../Movies'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Movies/>
      <ShowData/>
      <NetflixHome/>
      <Vidioplay/>
      <YouTubePlayer/>
      
    </div>
  )
}

export default Home