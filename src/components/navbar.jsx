import React from 'react'
import Ttr from '../img/ttr.jpeg'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Chat-app</span>
        <div className="user">
            <img src={Ttr} alt="" /> {/*images not loading check once*/}
            <span>Taterao</span>
            <button><Link to='/Login' style={{color:'white',textDecoration:'none'}}>LogOut</Link></button>
        </div>
    </div>
  )
}

export default Navbar