import React from 'react'
import { Link } from 'react-router-dom';
/*import addAvatar from '../img'*/

export const Login = () => {
  return (
    <div className='formContainer' >

    <div className='formWrapper' >
        <span className='logo'>Chat-App</span>
        <span className='title'>Login..</span>
        <form>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password' />
           
            <button><Link to='/Home' style={{color:'white', textDecoration:'none'}}>Sign In</Link></button>
            <p>If You don't have an account? <Link to='/Register'>Sign Up</Link></p>
        </form>
    </div>
  </div>
  )
}
export default Login;