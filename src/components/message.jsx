import React from 'react'
import wan from '../img/wan.jpg'
import chatimg from '../img/chatimg.jpg'
import sona from '../img/download.jpg'

const message = () => {
  return (
      <div className='message owner'>
        <div className="messageInfo">
          <img src={wan} alt="" />
          <span>Just now</span>
        </div>
        <div className="messageContent">
          <p>Hello</p>
          <img src={chatimg} alt="" />

        </div>
        <div>
        <div className="messageContent">
          <p>Hello</p>
          <img src={chatimg} alt="" />

        </div>
        <div className="messageInfo">
          <img src={sona} alt="" />
          <span>Just now</span>
        </div>


        </div>
      </div>
  )
}

export default message;