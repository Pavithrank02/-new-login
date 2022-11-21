import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='page'>
          <Link to="/">
            <p> Home</p>
        </Link>
        <Link to="/">
            <p> SignUp</p>
        </Link>
        <Link to="/">
            <p> SignIn</p>
        </Link>
      
    </div>
  )
}

export default Home