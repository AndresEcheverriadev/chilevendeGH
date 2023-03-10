import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import ProductCard from '../ProductCard/ProductCard'
import './ProductCarousel.css'

function ProductCarousel({title,linktitle,name}) {

    const productsCards = productSet.map((producto) => {
        return  <NavLink to={`/${producto.category}/${producto.name}`}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    }); 
    
    useEffect(() => {
      const gap = 10;
      const carousel = document.getElementById(`carousel${name}`),
        content = document.getElementById(`content${name}`),
        next = document.getElementById(`next${name}`),
        prev = document.getElementById(`prev${name}`);
      
      next.addEventListener("click", e => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
          prev.style.display = "flex";
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "none";
        }
      });
      prev.addEventListener("click", e => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
          prev.style.display = "none";
        }
        if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "flex";
        }
      });
      let width = carousel.offsetWidth;
      window.addEventListener("resize", e => (width = carousel.offsetWidth));      
    });

  return (
    <div className="carouselContainer">
        <div className="carouselTitles">
            {title? <h5 className="carouselTitle">{title}</h5> : null}
            {linktitle? <NavLink to='/'><h6 className="carouselAll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                      </svg><b>{linktitle}</b></h6></NavLink> : null}
        </div>
        <div className="carouselCards">
          <div id={`wrapper`} className='wrapper'>
            <div id={`carousel${name}`} className='carousel'>
              <div id={`content${name}`} className='content'>
              {productsCards}
              </div>
            </div>
            <button id={`prev${name}`} className='prev'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
              </svg>
            </button>
            <button id={`next${name}`} className='next'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  )
}

export default ProductCarousel