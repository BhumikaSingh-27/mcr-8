import React from 'react'
import Dropdown from '../components/Dropdown'
import Home from './Home'

const Landing = () => {
  return (
    <div className="section">
    <div className="section-header">
      {" "}
      <h1>Meetup Events</h1>
      <Dropdown />
    </div>
    <Home />
  </div>
  )
}

export default Landing