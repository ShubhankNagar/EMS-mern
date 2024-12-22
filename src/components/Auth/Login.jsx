import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is ", email)
        console.log("password is ", password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-15 rounded-xl'>
            <form onSubmit={(e)=>{submitHandler(e)}}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='border-2 border-emerald-600 text-xl text-white outline-none bg-transparent placeholder:text-grey-400 rounded-full py-3 px-5' type="email" placeholder='Enter your email' />
                <input 
                value={email}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='border-2 border-emerald-600 text-xl text-white outline-none bg-transparent placeholder:text-grey-400 rounded-full py-3 px-5 mt-4' type="password" placeholder='Password' />
                <button className='border-2 bg-emerald-600 text-xl text-white outline-none border-none placeholder:text-white rounded-full py-3 px-5 mt-3' >Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login