import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Register() {
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input type='text' placeholder='username' required/>
            <input type='email' placeholder='email' required/>
            <input type='password' placeholder='password' required/>
            <button>Login</button>
            <p>This is an error!</p>
            <span>Do yoy have account? <Link to="/login">LOGIN</Link></span>
        </form>
    </div>
  )
}
