import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePageContainer'>
        <NavBar/>
        <div>HomePage</div>
        <Footer/>
    </div>
  )
}

export default HomePage