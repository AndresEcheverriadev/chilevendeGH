import React from 'react'
import {NavLink} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import './SaleHome.css'

function SaleHome() {
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
            <NavLink to='/' className='cardContainer'>
                <ProductCard/>
            </NavLink>
            <NavLink to='/' className='cardContainer'>
                <ProductCard/>
            </NavLink>
            <NavLink to='/' className='cardContainer'>
                <ProductCard/>
            </NavLink>
            <NavLink to='/' className='cardContainer'>
                <ProductCard/>
            </NavLink>
        </div>
    </div>
  )
}

export default SaleHome