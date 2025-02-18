import React from 'react'
import { Sponsers } from '../Components/Sponsers/Sponsers'

function SponserPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <img src="/ingenium-logo.png" alt="Ingenium" className="h-16 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-2">Presenting our</h1>
          <h2 className="text-5xl font-bold text-pink-500 mb-4">TITLE SPONSOR</h2>
        </div>
        <Sponsers />
      </div>
    </div>
  )
}

export default SponserPage
