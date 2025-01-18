import React from 'react'
import { Hero } from '../Components/Hero'
import { AboutUs } from '../Components/AboutUs'
function Home() {
  return (
    <div className='bg-colBlack w-full h-full'>
        <Hero/>
        <AboutUs/>
    </div>
  )
}

export default Home
