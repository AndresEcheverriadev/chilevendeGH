import React from 'react'
import Logo from '../Logo/Logo'
import './NavBar.css'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light contenedorNav">
        <div className='contenedorNav--contenedorPrincipal'>
            <Logo/>
            <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success btnSearch" type="submit">Buscar</button>
            </form>
        </div>
        <div className="container-fluid contenedorNav--contenedorSecundario">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
    </>  
  )
}

export default NavBar