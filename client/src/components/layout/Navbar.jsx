import { useState, useEffect } from 'react'

const Navbar = () => {


const [loggedIn, setLoggedIn] = useState("Login")

useEffect(() => {
  if(!loggedIn){
    setLoggedIn("Sign In")
  }
},[loggedIn])

const handleLogin = () => {
  setLoggedIn(loggedIn === "Login" ? "Logout" : "Login")

}


  return (
    <div className='relative flex h-7'>
    <div>
    <a href='/SignIn' onClick={handleLogin} className='text-white'>{loggedIn}</a>

    </div>
    </div>
  )
}

export default Navbar
