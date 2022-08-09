import React from 'react'
import NavBar from '../NavBar/NavBar'
import CarrouselHome from '../CarrouselHome/CarrouselHome'
import CharsetHome from '../CharsetHome/CharsetHome'
import ProductCarousel from '../ProductCarousel/ProductCarousel'
import SaleHome from '../SaleHome/SaleHome'
import NewHome from '../NewHome/NewHome'
import CategoriesHome from '../CategoriesHome/CategoriesHome'
import SelectedHome1 from '../SelectedHome/SelectedHome1'
import SelectedHome2 from '../SelectedHome/SelectedHome2'
import SelectedHome3 from '../SelectedHome/SelectedHome3'
import SelectedHome4 from '../SelectedHome/SelectedHome4'
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
          <ProductCarousel  title='Tu última visita' linktitle='Ver historial' name='visited'/>
          <ProductCarousel title='Ofertas' linktitle='Ver todo' name='sale'/>
          <ProductCarousel title='Recien llegados' linktitle='Ver todo' name='new'/>
          <CategoriesHome/>
          <SelectedHome1/>
          <SelectedHome2/>
          <SelectedHome3/>
          <SelectedHome4/>
        </main>
        <SuscribeMail/>
        <Footer/>
    </div>

  )
}

export default HomePage