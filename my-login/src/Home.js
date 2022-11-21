import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className='page'>
      <Link to="/" style={{ textDecoration: 'none'}}>
        <p> Home</p>
      </Link>
      <Link to="/" style={{ textDecoration: 'none'}}>
        <p> SignUp</p>
      </Link>
      <Link to="/signIn" style={{ textDecoration: 'none'}}>
        <p> SignIn</p>
      </Link>
    </div>
  )
}

export default Home