import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import ProductCard from '../ProductCard/ProductCard'
import './VisitedHome.css'

function VisitedHome() {
    const productsCardsVisited = productSet.map((producto) => {
        return  <NavLink to={`/${producto.category}/${producto.name}`}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    }) 
    useEffect(() => {
      const gapVisited = 10;
      const carouselVisited = document.getElementById("carouselVisited"),
        contentVisited = document.getElementById("contentVisited"),
        nextVisited = document.getElementById("nextVisited"),
        prevVisited = document.getElementById("prevVisited");
      
      nextVisited.addEventListener("click", e => {
        carouselVisited.scrollBy(width + gapVisited, 0);
        if (carouselVisited.scrollWidth !== 0) {
          prevVisited.style.display = "flex";
        }
        if (contentVisited.scrollWidth - width - gapVisited <= carouselVisited.scrollLeft + width) {
          nextVisited.style.display = "none";
        }
      });
      prevVisited.addEventListener("click", e => {
        carouselVisited.scrollBy(-(width + gapVisited), 0);
        if (carouselVisited.scrollLeft - width - gapVisited <= 0) {
          prevVisited.style.display = "none";
        }
        if (!contentVisited.scrollWidth - width - gapVisited <= carouselVisited.scrollLeft + width) {
          nextVisited.style.display = "flex";
        }
      });
      let width = carouselVisited.offsetWidth;
      window.addEventListener("resize", e => (width = carouselVisited.offsetWidth));      
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

          <div id="wrapperVisited">
            <div id="carouselVisited">
              <div id="contentVisited">
              {productsCardsVisited}
              </div>
            </div>
            <button id="prevVisited">
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
            <button id="nextVisited">
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