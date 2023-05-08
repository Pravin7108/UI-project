/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

export default function Header() {
  const [welcome, setWelcome] = useState(true);

  const close = () => {
    setWelcome(!welcome)
  }

  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img src='https://theticket9.com/wp-content/uploads/2020/02/theticket9.com_-4.png' alt='logo' width="140px" />
        </div>

        {welcome && (<div className='welcome'>
        <p>Welcome to the Ticket 9 community</p>
        <button onClick={close} className='welcome-close'><ion-icon name="close-outline" /></button>
        </div>)}

        <div className='user'>
          <a className='a' href="#"><ion-icon name="person-circle-outline" />Login</a><p style={{ color: "grey" }}>I</p>
          <a className='a' href="#">Register</a>
        </div>
        <a href="#" className="Event-btn"><ion-icon name="ticket-outline" />Create Event</a>
      </div>
    </>
  )
}