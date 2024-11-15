import React from 'react'
import"./Header.css"
import { BrowserRouter,Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    
    <div className='heading'>
      <div>
        <h1>Book<span className='my'>my</span>show</h1>
    </div>
    <div>
      <h4>
        <Link to={"/"} className='home'>Home</Link>
        </h4>
    </div>
    </div>
   
    </>
  )
}

export default Header