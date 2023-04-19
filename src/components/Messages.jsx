import React from 'react'
import Message from './message'

const Messages = () => {
  return (
    <div className='messages'>     {/*   here i create messages in other component bcz dont want to write again and again , it will easy if you call that code again*/ }
      <Message/>
      <Message/>
      <Message/>               
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      


      
    </div>
  )
}

export default Messages