import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import productSet from '../../Metasite/productSet';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsCategory.css';

function ProductsCategory() {

    const {productoCategory} = useParams();
    const productsFiltered = productSet.filter(producto => (producto.category) === (productoCategory));
    const productCardsCategory = productSet.map((producto) => {
        return  <NavLink to={`/${producto.category}/${producto.name}`}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
     }); 
    const productTagsCategory = productSet.map((producto) => {
      return  producto.etiquetas.map((tag) => <button className='productsTags'>{tag}</button>) 
    });
    const star = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
      </svg>;
     
    return (
      <div className="productsCategoryPage">
        <NavBar/>

        <div className="productsCategoryHeader">
          <h1>Hogar y Muebles</h1>
          
          <div className='productsTagsContainer'>
          <h5>Busquedas relacionadas:</h5>
            {productTagsCategory}
          </div>

        </div>

  
        <div className="productsCategoryContainer">

          <div className='productsCategorySideBar'>
            <div className='sideBarElem'>
              <h5>{productCardsCategory.length} resultados</h5>
              <button className='filterBtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>Borrar filtros
              </button>
            </div>
            <div className='sideBarElem'>
              <div className='sideBarSeparator'>
                <h6>Ordenar por Precio</h6>
                <button className='sideBarBtn'>Menor precio</button>
                <button className='sideBarBtn'>Mayor precio</button>
              </div>
              <div className='sideBarSeparator'>
                <h6>Ordenar por % Descuento</h6>
                <button className='sideBarBtn'>Menor %</button>
                <button className='sideBarBtn'>Mayor %</button>
              </div>
              <div className='sideBarSeparator'>
                <h6>Ordenar por Fecha</h6>
                <button className='sideBarBtn'>Mas nuevo</button>
                <button className='sideBarBtn'>Menos nuevo</button>
              </div>
              <div className='sideBarSeparator noBorder'>
                <h6>Ordenar por Valoración</h6>
                <button className='sideBarBtn'>{star}{star}{star}{star}{star}</button>
                <button className='sideBarBtn'>{star}{star}{star}{star}</button>
                <button className='sideBarBtn'>{star}{star}{star}</button>
                <button className='sideBarBtn'>{star}{star}</button>
                <button className='sideBarBtn'>{star}</button>
              </div>
            </div>
          </div>

          <div className="productsCategoryCards">
                {productCardsCategory}
          </div>

      </div>



        <Footer/>  
      </div>
    )
  }
  
export default ProductsCategory