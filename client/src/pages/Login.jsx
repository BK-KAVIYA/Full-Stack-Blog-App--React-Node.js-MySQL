import React from 'react'

export default function Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button>Login</button>
        </form>
    </div>
  )
}
