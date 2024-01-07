import React, { useContext } from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export default function Navbar() {
  const {curentUser,logout}=useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link  to='/'>
            <img src={Logo} alt="logo" />
          </Link>  
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <span className='links'>{curentUser?.username}</span>
          {curentUser ?
            (<span onClick={logout} className='links'>Logout</span>) : 
            (<Link className='links' to='/login'>Login</Link>)
          }

          <span className='links'>
            <Link className='write' to="/write">Write</Link>
          </span>
        </div>
      </div>  
    </div>
  )
}
