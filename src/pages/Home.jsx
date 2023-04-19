import React from 'react'
import Sidebar from '../components/sidebar'
import Chats from '../components/chats'

const Home = () => {
    
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chats/>
        </div>
    </div >
    )
}
export default Home