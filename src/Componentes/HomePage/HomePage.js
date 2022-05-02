import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePageContainer'>
        <NavBar/>
          <section className='homePage--mainBanner'>
            Banner Principal
          </section>
          <section className='homePage--body'>
            Cuerpo del home
          </section>
        <Footer/>
    </div>

  )
}

export default HomePage