import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../Logo/LogoHorizBN.png'
import categoriasSitio from '../../Metasite/Categorias'
import './NavBar.css'

function NavBar() {
  const navbarCategorias = categoriasSitio.map((categoria) => {
      return <li><NavLink className='collapsableList--listaCategorias' to={categoria[1]}>{categoria[1]}</NavLink></li>;
  })  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light grid col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12  contenedorNav">

        {/* Logo */}
        <div className='col-sm-2	col-md-2	col-lg-2 col-xl-2	col-xxl-2 contenedorNav--logo'><NavLink to='/'><img className='navbarLogo'  src={logo} alt=""></img></NavLink></div>

        {/* Menu Main */}
        <div className="col-sm-8	col-md-8	col-lg-8 col-xl-8	col-xxl-8 contenedorNav--mainMenu">

            {/* Menu Main top */}
                <form className="mainMenu--top">
                        <input className="form-control mainMenu--top--searchBar" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success mainMenu--top--search--searchBtn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </button>
                </form>

            {/* Menu Main bottom */}
            <div className="mainMenu--bottom">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>


                  <ul className="collapse navbar-collapse navbar-nav mainMenu--bottom--linksMenu" id="navbarSupportedContent">

                    <li className="nav-item dropdown linksMenu--categoriesList">
                      <button className="nav-link dropdown-toggle categoriesList--btnDropdown" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                      </button>
                      <ul className="dropdown-menu categoriesList--collapsableList" aria-labelledby="navbarDropdown">
                      {navbarCategorias}
                      </ul>
                    </li>

                    <li className="nav-item linksMenu--link">
                      <NavLink to='/Historial'>Historial</NavLink>
                    </li>
                    <li className="nav-item linksMenu--link">
                      <NavLink to='/Ofertas'>Ofertas</NavLink>
                    </li>
                    <li className="nav-item linksMenu--link">
                      <NavLink to='/Recien-llegados'>Recien llegados</NavLink>
                    </li>
                    <li className="nav-item linksMenu--link">
                      <NavLink to='/Ayuda'>Ayuda</NavLink>
                    </li>
                  </ul>

            </div>

        </div>

          {/* User Controls */}
          <div className='col-sm-1 col-md-1	col-lg-1 col-xl-1	col-xxl-1 contenedorNav--userControls'>
            <div className='userControls--sesion'><NavLink to='/login'>Iniciar sesión<div className='userControls--sesionIcon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
            </div></NavLink>
            </div>
            <div className='userControls--resgistrarse'><NavLink to='/crear-cuenta'>Crear cuenta</NavLink></div>
          </div>

          {/* Cart Controls */}
          <div className='col-sm-1	col-md-1	col-lg-1 col-xl-1	col-xxl-1 contenedorNav--cartControls'>
            <div className='cartControls--container'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart3 cart cartControls--cartIcon" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <div className='cartControls--qTip'>23</div>
            </div>
          </div>

      </nav>
    </>  
  )
}

export default NavBar