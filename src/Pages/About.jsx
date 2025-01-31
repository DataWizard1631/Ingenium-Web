import React from 'react'
import InfoCard from '../Components/InfoCard'
import MouseCard from '../Components/MouseCard'

function About() {
  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto">
      <InfoCard />
      <MouseCard/>
    </div>
  )
}


export default About
