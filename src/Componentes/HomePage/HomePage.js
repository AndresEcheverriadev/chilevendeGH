import React from 'react'
import NavBar from '../NavBar/NavBar'
import CarrouselHome from '../CarrouselHome/CarrouselHome'
import CharsetHome from '../CharsetHome/CharsetHome'
import SuscribeMail from '../SuscribeEmail/SuscribeMail'
import Footer from '../Footer/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePageContainer'>
        <NavBar/>
        <section className='homePage--carrouselHome'>
          <CarrouselHome/>
        </section>
        <section className='homePage--charsetHome'>
          <CharsetHome/>
        </section>
        <main className='homePage--body'>
          Cuerpo del home
        </main>
        <SuscribeMail/>
        <Footer/>
        <div className='corpinfoContainer'>
          <div className='corpinfo--copyright'>Copyright © 2021-2002 Chilevende.cl</div>
          <div className='corpinfo--address'>Avenida Providencia 1208 Oficina 1603, Providencia, Santiago, Chile</div>
        </div>
    </div>

  )
}

export default HomePage