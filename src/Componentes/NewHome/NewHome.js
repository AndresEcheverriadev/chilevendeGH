import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import ProductCard from '../ProductCard/ProductCard'
import './NewHome.css'

function NewHome() {
    const productsCardsNew = productSet.map((producto) => {
        return  <NavLink to={producto.name}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    }) 
    useEffect(() => {
      const gapNew = 10;
      const carouselNew = document.getElementById("carouselNew"),
        contentNew = document.getElementById("contentNew"),
        nextNew = document.getElementById("nextNew"),
        prevNew = document.getElementById("prevNew");
      
      nextNew.addEventListener("click", e => {
        carouselNew.scrollBy(width + gapNew, 0);
        if (carouselNew.scrollWidth !== 0) {
          prevNew.style.display = "flex";
        }
        if (contentNew.scrollWidth - width - gapNew <= carouselNew.scrollLeft + width) {
          nextNew.style.display = "none";
        }
      });
      prevNew.addEventListener("click", e => {
        carouselNew.scrollBy(-(width + gapNew), 0);
        if (carouselNew.scrollLeft - width - gapNew <= 0) {
          prevNew.style.display = "none";
        }
        if (!contentNew.scrollWidth - width - gapNew <= carouselNew.scrollLeft + width) {
          nextNew.style.display = "flex";
        }
      });
      let width = carouselNew.offsetWidth;
      window.addEventListener("resize", e => (width = carouselNew.offsetWidth));      
    })
  return (
    <div className="newHomeContainer">
        <div className="newHomeTitles">
            <h5 className="newTitle">Recién llegados</h5>
            <NavLink to='/'><h6 className="newAll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg><b>Ver todo</b></h6>
            </NavLink>
        </div>
        <div className="newHomeCards">

            <div id="wrapperNew">
                <div id="carouselNew">
                <div id="contentNew">
                {productsCardsNew}
                </div>
                </div>
                <button id="prevNew">
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
                <button id="nextNew">
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

export default NewHome