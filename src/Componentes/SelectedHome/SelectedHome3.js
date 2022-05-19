import React from 'react'
import {NavLink} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import selectedBanner3 from './selectedbanner3.png'
import './SelectedHome.css'

function SelectedHome3() {
  return (
    <div className="selectedHomeContainer">
        <NavLink to='/' className='selectedHomeBanner'>
            <div className='selectedAllContainer'><h4>Muebles Hogar</h4><h6 className="selectedAllLink"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg><b>ver todo</b></h6>
            </div>
            <img className='selectedBannerImage' src={selectedBanner3} alt="" />
        </NavLink>
        <div className="selectedHomeCards">
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

export default SelectedHome3