import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import productSet from '../../Metasite/productSet'
import ProductCard from '../ProductCard/ProductCard'
import './SaleHome.css'

function SaleHome() {
    const productsCardsSale = productSet.map((producto) => {
        return  <NavLink to={producto.name}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
    }) 
    useEffect(() => {
      const gapSale = 10;
      const carouselSale = document.getElementById("carouselSale"),
        contentSale = document.getElementById("contentSale"),
        nextSale = document.getElementById("nextSale"),
        prevSale = document.getElementById("prevSale");
      
      nextSale.addEventListener("click", e => {
        carouselSale.scrollBy(width + gapSale, 0);
        if (carouselSale.scrollWidth !== 0) {
          prevSale.style.display = "flex";
        }
        if (contentSale.scrollWidth - width - gapSale <= carouselSale.scrollLeft + width) {
          nextSale.style.display = "none";
        }
      });
      prevSale.addEventListener("click", e => {
        carouselSale.scrollBy(-(width + gapSale), 0);
        if (carouselSale.scrollLeft - width - gapSale <= 0) {
          prevSale.style.display = "none";
        }
        if (!contentSale.scrollWidth - width - gapSale <= carouselSale.scrollLeft + width) {
          nextSale.style.display = "flex";
        }
      });
      let width = carouselSale.offsetWidth;
      window.addEventListener("resize", e => (width = carouselSale.offsetWidth));      
    })
  return (
    <div className="saleHomeContainer">
        <div className="saleHomeTitles">
            <h5 className="saleTitle">Ofertas</h5>
            <NavLink to='/'><h6 className="saleAll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg><b>Ver todo</b></h6>
            </NavLink>
        </div>
        <div className="saleHomeCards">

            <div id="wrapperSale">
                <div id="carouselSale">
                <div id="contentSale">
                {productsCardsSale}
                </div>
                </div>
                <button id="prevSale">
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
                <button id="nextSale">
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

export default SaleHome