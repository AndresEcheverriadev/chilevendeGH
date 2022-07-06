import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import ProductCard from '../ProductCard/ProductCard'
import './SugestedProducts.css'

function SugestedProducts() {
    const productsCardsSugested = productSet.map((producto) => {
        return  <NavLink to={`/${producto.category}/${producto.name}`}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    }) 
    useEffect(() => {
      const gapSugested = 10;
      const carouselSugested = document.getElementById("carouselSugested"),
        contentSugested = document.getElementById("contentSugested"),
        nextSugested= document.getElementById("nextSugested"),
        prevSugested = document.getElementById("prevSugested");
      
      nextSugested.addEventListener("click", e => {
        carouselSugested.scrollBy(width + gapSugested, 0);
        if (carouselSugested.scrollWidth !== 0) {
          prevSugested.style.display = "flex";
        }
        if (contentSugested.scrollWidth - width - gapSugested <= carouselSugested.scrollLeft + width) {
          nextSugested.style.display = "none";
        }
      });
      prevSugested.addEventListener("click", e => {
        carouselSugested.scrollBy(-(width + gapSugested), 0);
        if (carouselSugested.scrollLeft - width - gapSugested <= 0) {
          prevSugested.style.display = "none";
        }
        if (!contentSugested.scrollWidth - width - gapSugested <= carouselSugested.scrollLeft + width) {
          nextSugested.style.display = "flex";
        }
      });
      let width = carouselSugested.offsetWidth;
      window.addEventListener("resize", e => (width = carouselSugested.offsetWidth));      
    })
  return (
    <div className="sugestedContainer">
        <div className="sugestedTitles">
            <h5 className="sugestedTitle">Productos relacionados</h5>
        </div>
        <div className="sugestedCards">

          <div id="wrapperSugested">
            <div id="carouselSugested">
              <div id="contentSugested">
              {productsCardsSugested}
              </div>
            </div>
            <button id="prevSugested">
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
            <button id="nextSugested">
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

export default SugestedProducts