import React from 'react'
import { Hero } from '../Components/Hero'
import ImageCarousel from '../Components/EventCaro'
function Home() {
  return (
    <div className='bg-colBlack w-full h-full pt-16'>
        <Hero/>
        <ImageCarousel/>
        
    </div>
  )
}

export default Home
