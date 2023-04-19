import React from 'react';
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages';
import Input from './Input'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="chatInfo">
        <span>Akhila</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>

    </div>
  )
}

export default Chats;