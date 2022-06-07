import React from 'react'
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
  return (
    <div className="visitedHomeContainer">
        <div className="visitedHomeTitles">
            <h5 className="visitedTitle">Tu última visita</h5>
            <NavLink to='/'><h6 className="visitedAll"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg><b>Ver historial</b></h6>
            </NavLink>
        </div>
        <div className="visitedHomeCards">{productsCardsVisited}</div>
    </div>
  )
}

export default VisitedHome