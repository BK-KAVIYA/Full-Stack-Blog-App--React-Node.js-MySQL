import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button>Login</button>
            <p>This is an error!</p>
            <span>Don't have account? <Link to="/register">REGISTER</Link></span>
        </form>
    </div>
  )
}
