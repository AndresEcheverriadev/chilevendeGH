import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'

function Footer() {
  return (
    <footer className='footerContainer'>
      <div className='footerContent'>
        <div className='footerContent--Logo'><Logo/></div>
        <div className='footerContent--Columns'>Footer</div>
        <div className='footerContent--Columns'>Footer</div>
        <div className='footerContent--Columns'>Footer</div>
        <div className='footerContent--Columns'>Footer</div>
        <div className='footerContent--Columns'>Footer</div>
      </div>
    </footer>
  )
}

export default Footer