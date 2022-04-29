import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Cart from './Cart'
import './NavBar.css'
import UserControls from './UserControls'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light contenedorNav">
        <div className='contenedorNav--contenedorTop'>
            <div className='contenedorNav--contenedorTop--Logo'><NavLink to='/'><Logo/></NavLink></div>
            <form className="d-flex contenedorNav--contenedorTop--Search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success contenedorNav--contenedorTop--btnSearch" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg></button>
            </form>
            <div className='contenedorNav--contenedorTop--UserControls'><UserControls/><Cart/></div>
        </div>
        <div className="contenedorNav--contenedorBottom">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <p>Categorías</p>
            <p>Ofertas</p>
            <p>Recien llegados</p>
            <p>Ayuda</p>
        </div>
    </nav>
    </>  
  )
}

export default NavBar