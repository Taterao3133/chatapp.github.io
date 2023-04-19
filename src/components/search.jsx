import React from 'react'
import me from '../img/me.jpg'
import wan from '../img/wan.jpg'
import om from '../img/om.jpg'
import sona from '../img/download.jpg'
import namdev from '../img/namdev.jpg'
import {Link} from 'react-router-dom'


const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"  placeholder='Find a User'/>
  
      </div>
      <div className='userchat'>
        <img src={me} alt="" />
        <div className="userchatInfo">
          <span>Taterao</span>
        </div>
        
      </div>
      <div className='userchat'>
        <img src={namdev} alt="" />
        <div className="userchatInfo">
          <span>Namdev </span>
          <p>call me</p>
        </div>
      </div>

      <div className='userchat'>
        <img src={sona} alt="" />
        <div className="userchatInfo">
          <span>Sona</span>
          <p>had ur dinner</p>
        </div>
      </div>

      <div className='userchat'>
        <img src={wan} alt="" />
        <div className="userchatInfo">
          <span><Link to='/akhila' style={{color:'white', textDecoration:'none'}}>Akhila</Link></span>
          <p>where are you</p>
        </div>
      </div>

      <div className='userchat'>
        <img src={om} alt="" />
        <div className="userchatInfo">
          <span>Omkar</span>
          <p>how are you</p>
        </div>
      </div>
      
    </div>
  )
}

export default Search