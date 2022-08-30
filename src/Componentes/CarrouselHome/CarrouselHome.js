import React from 'react'
import imgCarrousel1 from '../../imgs/carrouselHome1.png'
import imgCarrousel2 from '../../imgs/carrouselHome2.png'
import imgCarrousel3 from '../../imgs/carrouselHome3.png'
import './CarrouselHome.css'

function CarrouselHome() {
  return (
    <div id="homeCarousel" className="carousel slide" data-bs-ride='carousel'>
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-indicator-width="60px" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={imgCarrousel1} className="d-block w-100 imgCarousel" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={imgCarrousel2} className="d-block w-100 imgCarousel" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={imgCarrousel3} className="d-block w-100 imgCarousel" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    </div>
  )
}

export default CarrouselHome