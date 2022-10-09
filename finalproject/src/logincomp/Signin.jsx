import React from 'react'
import '../App.scss';
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext';
import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Account')
      alert('You logged in')
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <div>Welcome to the login Page
    <form onSubmit={handleSubmit}>
        <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input id="emailForm" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" />     
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input id="passwordForm" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Password' onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logi Sisse</button>
        </form>
</div>
  )
}

export default Signin