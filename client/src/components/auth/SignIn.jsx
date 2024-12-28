import React from 'react'

const SignIn = () => {
  return (
    <div className='relative flex h-7 bg-blue-500'>
      <form action="">
      <input type="text" name='signin' className='text-black'/>
      <input type="password" name='password' className='text-black'/>
      <button className='text-black' type="submit">Login</button>
      </form>
    </div>
  )
}

export default SignIn
