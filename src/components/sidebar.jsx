import React from 'react'
import Navbar from './navbar'
import Search from './search'



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Search/>  
    </div>
  )
}
export default  Sidebar