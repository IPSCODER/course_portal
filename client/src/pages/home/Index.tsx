import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Featured from './featured/Featured'
import Services from './services/Services'
import About from './about/About'


const Home = () => {

  return (
    <>
   <Carousel/>
   <Featured/>
   <Services/>
   <About/>
    </>
  )
}

export default Home