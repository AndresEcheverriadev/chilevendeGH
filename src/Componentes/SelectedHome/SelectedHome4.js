import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import selectedBanner4 from './selectedbanner4.png'
import ProductCard from '../ProductCard/ProductCard'
import './SelectedHome.css'

function SelectedHome4() {
    const productsCardsSel4 = productSet.map((producto) => {
        return  <NavLink to={producto.name}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    })
    useEffect(() => {
        const gapSel4 = 10;
        const carouselSel4 = document.getElementById("carouselSel4"),
          contentSel4 = document.getElementById("contentSel4"),
          nextSel4 = document.getElementById("nextSel4"),
          prevSel4 = document.getElementById("prevSel4");
        
        nextSel4.addEventListener("click", e => {
          carouselSel4.scrollBy(width + gapSel4, 0);
          if (carouselSel4.scrollWidth !== 0) {
            prevSel4.style.display = "flex";
          }
          if (contentSel4.scrollWidth - width - gapSel4 <= carouselSel4.scrollLeft + width) {
            nextSel4.style.display = "none";
          }
        });
        prevSel4.addEventListener("click", e => {
          carouselSel4.scrollBy(-(width + gapSel4), 0);
          if (carouselSel4.scrollLeft - width - gapSel4 <= 0) {
            prevSel4.style.display = "none";
          }
          if (!contentSel4.scrollWidth - width - gapSel4 <= carouselSel4.scrollLeft + width) {
            nextSel4.style.display = "flex";
          }
        });
        let width = carouselSel4.offsetWidth;
        window.addEventListener("resize", e => (width = carouselSel4.offsetWidth));      
      }) 

  return (
    <div className="selectedHomeContainer">
        <NavLink to='/' className='selectedHomeBanner'>
            <div className='selectedAllContainer'><h4>Belleza y Cuidado Personal</h4><h6 className="selectedAllLink"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg><b>ver todo</b></h6>
            </div>
            <img className='selectedBannerImage' src={selectedBanner4} alt="" />
        </NavLink>
        <div className="selectedHomeCards">

        <div id="wrapperSel4">
                        <div id="carouselSel4">
                        <div id="contentSel4">
                        {productsCardsSel4}
                        </div>
                        </div>
                        <button id="prevSel4">
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
                        <button id="nextSel4">
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

export default SelectedHome4