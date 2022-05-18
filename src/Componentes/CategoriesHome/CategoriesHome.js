import React from 'react'
import {NavLink} from 'react-router-dom'
import categoriasSitio from '../../Metasite/Categorias'
import './CategoriesHome.css'

function CategoriesHome() {
    const selectorCategorias = categoriasSitio.map((categoria) => {
        return <NavLink to={categoria[1]} ><div className='categoriesCardContainer'><span className="material-symbols-rounded">{categoria[0]}</span>
        <h6>{categoria[1]}</h6></div>
        </NavLink>
    })  
  return (
    <div className="categoriesHomeContainer">
        <div className="categoriesHomeTitles">
            <h5 className="categoriesTitle">Categorias</h5>
        </div>
        <div className="categoriesHomeCards">{selectorCategorias}</div>
    </div>
  )
}

export default CategoriesHome