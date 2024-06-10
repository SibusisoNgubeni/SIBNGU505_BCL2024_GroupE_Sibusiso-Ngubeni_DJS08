import React from 'react'
import { Link } from 'react-router-dom'

export default function HostLayout() {
  return (
    <Nav>
       <Link to="/host/Dashboard">Dashboard</Link>
       <Link to="/host/Income">Income</Link>
       <Link to="/host/Reviews">Reviews</Link>
    </Nav>
  )
}
