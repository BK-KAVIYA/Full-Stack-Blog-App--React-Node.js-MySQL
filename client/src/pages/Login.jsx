import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const [error, setError] = useState(null)
  const navigate=useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    console.log(inputs)
    e.preventDefault()
    try {
      await axios.post('/auth/login', inputs)
      navigate('/')
    } catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username' name='username' onChange={handleChange} required/>
            <input type='password' placeholder='password' name='password' onChange={handleChange}  required/>
            <button onClick={handleSubmit}>Login</button>
            {
              error &&
              <p>{error}</p>
            }
            <span>Don't have account? <Link to="/register">REGISTER</Link></span>
        </form>
    </div>
  )
}
