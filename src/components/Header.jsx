import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <Link to='/'> <div className="logo">ResumAI</div></Link>
    </div>
  )
}

export default Header
