import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import selectedBanner1 from './selectedbanner1.png'
import ProductCard from '../ProductCard/ProductCard'
import './SelectedHome.css'

function SelectedHome1() {
    const productsCardsSel1 = productSet.map((producto) => {
        return  <NavLink to={producto.name}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    })
    useEffect(() => {
        const gapSel1 = 10;
        const carouselSel1 = document.getElementById("carouselSel1"),
          contentSel1 = document.getElementById("contentSel1"),
          nextSel1 = document.getElementById("nextSel1"),
          prevSel1 = document.getElementById("prevSel1");
        
        nextSel1.addEventListener("click", e => {
          carouselSel1.scrollBy(width + gapSel1, 0);
          if (carouselSel1.scrollWidth !== 0) {
            prevSel1.style.display = "flex";
          }
          if (contentSel1.scrollWidth - width - gapSel1 <= carouselSel1.scrollLeft + width) {
            nextSel1.style.display = "none";
          }
        });
        prevSel1.addEventListener("click", e => {
          carouselSel1.scrollBy(-(width + gapSel1), 0);
          if (carouselSel1.scrollLeft - width - gapSel1 <= 0) {
            prevSel1.style.display = "none";
          }
          if (!contentSel1.scrollWidth - width - gapSel1 <= carouselSel1.scrollLeft + width) {
            nextSel1.style.display = "flex";
          }
        });
        let width = carouselSel1.offsetWidth;
        window.addEventListener("resize", e => (width = carouselSel1.offsetWidth));      
      }) 
  return (
    <div className="selectedHomeContainer">
        <NavLink to='/' className='selectedHomeBanner'>
            <div className='selectedAllContainer'><h4>Cámaras y Accesorios</h4><h6 className="selectedAllLink"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg><b>ver todo</b></h6>
            </div>
            <img className='selectedBannerImage' src={selectedBanner1} alt="" />
        </NavLink>
        <div className="selectedHomeCards">

            <div id="wrapperSel1">
                    <div id="carouselSel1">
                    <div id="contentSel1">
                    {productsCardsSel1}
                    </div>
                    </div>
                    <button id="prevSel1">
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
                    <button id="nextSel1">
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

export default SelectedHome1