import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div className="home-container">
      
     <h1>You dream of a custom PA system, we build it for you.</h1>
     <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
     <Link to="vans">Find your design</Link>
    </div>
  )
};
