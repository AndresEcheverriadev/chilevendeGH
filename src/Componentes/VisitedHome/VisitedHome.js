import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import ProductCard from '../ProductCard/ProductCard'
import './VisitedHome.css'

function VisitedHome() {
    const productsCardsVisited = productSet.map((producto) => {
        return  <NavLink to={producto.name}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    }) 
    useEffect(() => {
      const gap = 10;
      const carousel = document.getElementById("carousel"),
        content = document.getElementById("content"),
        next = document.getElementById("next"),
        prev = document.getElementById("prev");
      
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
    })
  return (
    <div className="visitedHomeContainer">
        <div className="visitedHomeTitles">
            <h5 className="visitedTitle">Tu última visita</h5>
            <NavLink to='/'><h6 className="visitedAll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg><b>Ver historial</b></h6>
            </NavLink>
        </div>
        <div className="visitedHomeCards">
          <div id="wrapper">
            <div id="carousel">
              <div id="content">
              {productsCardsVisited}
              </div>
            </div>
            <button id="prev">
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
            <button id="next">
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

export default VisitedHome