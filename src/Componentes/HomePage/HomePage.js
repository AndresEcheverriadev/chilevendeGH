import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import SuscribeMail from '../SuscribeEmail/SuscribeMail'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePageContainer'>
        <NavBar/>
        <section className='homePage--mainBanner'>
          Banner Principal
        </section>
        <main className='homePage--body'>
          Cuerpo del home
        </main>
        <SuscribeMail/>
        <Footer/>
    </div>

  )
}

export default HomePage