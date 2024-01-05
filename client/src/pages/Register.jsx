import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [inputs, setInputs] = React.useState({
    username: '',
    email: '',
    password: '',
  })

  const [error, setError] = React.useState(null)
  const navigate=useNavigate()

  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/auth/register', inputs)
      navigate('/login')
    } catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input type='text' placeholder='username' name='username' onChange={handleChange}  required/>
            <input type='email' placeholder='email' name='email' onChange={handleChange} required/>
            <input type='password' placeholder='password' name='password' onChange={handleChange} required/>
            <button onClick={handleSubmit}>Register</button>
            {error &&
              <p>{error}</p>
            }
            <span>Do you have account? <Link to="/login">LOGIN</Link></span>
        </form>
    </div>
  )
}
