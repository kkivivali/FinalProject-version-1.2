import React from 'react'
//import { Route, Routes } from 'react-router-dom'
import '../App.scss';
import { useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext';
import { useState } from 'react';
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email,  password)
            navigate('/Account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
  return (
    <div>Register new user
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Email Address</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emailForm"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)} type="email" /> 
                
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passwordForm" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}type="password" />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Registreeri</button>
            </form>
        </div>
    
  )
}

export default Signup