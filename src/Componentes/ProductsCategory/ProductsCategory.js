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
    const productCardsCategory = productsFiltered.map((producto) => {
        return  <NavLink to={`/${producto.category}/${producto.name}`}   className='cardContainer'>
                    <ProductCard producto={producto} key={producto.id}/>
                </NavLink>
     });
    const productTagsCategory = productsFiltered.map((producto) => {
      return  producto.etiquetas.map((tag) => <button className='productsTags'>{tag}</button>)
    });
    const star = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg>;

    const [existFilter,setExistFilter] = useState(false);
    const [filterSet,updateFilterSet] = useState([]);
    const activatedFilters = filterSet.map((filter) => { 
      return <button key={filter} className='filterBtn' id={filter.id}>{filter.name}</button>}
    );



    const clearFilters = () => {
      setExistFilter(false);
      updateFilterSet([]);
    };

    const activateFilter = (filterBtn) => {
      setExistFilter(true);
      switch(filterBtn) {
        case 'pricePlus':
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === 'Mayor precio') {      
              return
            };
            if (filterSet[i].name === 'Menor precio') {      
              filterSet.splice(i, 1); 
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'Mayor precio',id:filterBtn}]);
          break;
        case 'priceMinus':
          for( var i = 0; i < filterSet.length; i++){ 
            if ( filterSet[i].name === 'Menor precio') {      
              return 
            };
            if (filterSet[i].name === 'Mayor precio') {      
              filterSet.splice(i, 1); 
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'Menor precio',id:filterBtn}]);
          break;
          case 'discountMinus':
            for( var i = 0; i < filterSet.length; i++){ 
              if (filterSet[i].name === 'Menor %') {      
                return
              };
              if (filterSet[i].name === 'Mayor %') {      
                filterSet.splice(i, 1); 
              };
            };
            updateFilterSet(filterSet =>[...filterSet,{name:'Menor %',id:filterBtn}]);
            break;
          case 'discountPlus':
            for( var i = 0; i < filterSet.length; i++){ 
              if ( filterSet[i].name === 'Mayor %') {      
                return 
              };
              if (filterSet[i].name === 'Menor %') {      
                filterSet.splice(i, 1); 
              };
            };
            updateFilterSet(filterSet =>[...filterSet,{name:'Mayor %',id:filterBtn}]);
            break;
          case 'datePlus':
            for( var i = 0; i < filterSet.length; i++){ 
              if ( filterSet[i].name === 'Mas nuevo') {      
                return 
              };
              if (filterSet[i].name === 'Menos nuevo') {      
                filterSet.splice(i, 1); 
              };
            };
            updateFilterSet(filterSet =>[...filterSet,{name:'Mas nuevo',id:filterBtn}]);
            break;
            case 'dateMinus':
              for( var i = 0; i < filterSet.length; i++){ 
                if ( filterSet[i].name === 'Menos nuevo') {      
                  return 
                };
                if (filterSet[i].name === 'Mas nuevo') {      
                  filterSet.splice(i, 1); 
                };
              };
              updateFilterSet(filterSet =>[...filterSet,{name:'Menos nuevo',id:filterBtn}]);
              break;
            case '5stars':
              for( var i = 0; i < filterSet.length; i++){ 
                if ( filterSet[i].name === '5stars') {      
                  return 
                };
                if (filterSet[i].name === '4stars' || filterSet[i].name === '3stars' || filterSet[i].name === '2stars' || filterSet[i].name === '1stars' ) {      
                  filterSet.splice(i, 1); 
                };
              };
              updateFilterSet(filterSet =>[...filterSet,{name:'5stars',id:filterBtn}]);
              break;
            case '4stars':
              for( var i = 0; i < filterSet.length; i++){ 
                if ( filterSet[i].name === '4stars') {      
                  return 
                };
                if (filterSet[i].name === '5stars' || filterSet[i].name === '3stars' || filterSet[i].name === '2stars' || filterSet[i].name === '1stars' ) {      
                  filterSet.splice(i, 1); 
                };
              };
              updateFilterSet(filterSet =>[...filterSet,{name:'4stars',id:filterBtn}]);
              break;
            case '3stars':
              for( var i = 0; i < filterSet.length; i++){ 
                if ( filterSet[i].name === '3stars') {      
                  return 
                };
                if (filterSet[i].name === '5stars' || filterSet[i].name === '4stars' || filterSet[i].name === '2stars' || filterSet[i].name === '1stars' ) {      
                  filterSet.splice(i, 1); 
                };
              };
              updateFilterSet(filterSet =>[...filterSet,{name:'3stars',id:filterBtn}]);
              break;
            case '2stars':
              for( var i = 0; i < filterSet.length; i++){ 
                if ( filterSet[i].name === '2stars') {      
                  return 
                };
                if (filterSet[i].name === '5stars' || filterSet[i].name === '4stars' || filterSet[i].name === '3stars' || filterSet[i].name === '1stars' ) {      
                  filterSet.splice(i, 1); 
                };
              };
              updateFilterSet(filterSet =>[...filterSet,{name:'2stars',id:filterBtn}]);
              break;
            case '1stars':
              for( var i = 0; i < filterSet.length; i++){ 
                if ( filterSet[i].name === '1stars') {      
                  return 
                };
                if (filterSet[i].name === '5stars' || filterSet[i].name === '4stars' || filterSet[i].name === '3stars' || filterSet[i].name === '2stars' ) {      
                  filterSet.splice(i, 1); 
                };
              };
              updateFilterSet(filterSet =>[...filterSet,{name:'1stars',id:filterBtn}]);
              break;
      }
    };

    return (

      <div className="productsCategoryPage">
        <NavBar/>

        <div className="productsCategoryHeader">
          <h1>{productoCategory}</h1>
          <h5>Busquedas relacionadas:</h5>

          <div className='productsTagsContainer'>
            {productTagsCategory}
          </div>

        </div>


        <div className="productsCategoryContainer">

          <div className='productsCategorySideBar'>
            <div className='sideBarElem'>
              <h5>{productCardsCategory.length > 1? `${productCardsCategory.length} productos encontrados` : `${productCardsCategory.length} producto encontrado` }</h5>
              {existFilter === true ? <><button className='filterBtn' id='clearfilterBtn' onClick={()=> clearFilters()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>Borrar filtros
              </button></> : null}
              <div className='filterBtnContainer' id='filterBtnContainer'>
                {activatedFilters}
              </div>
             

            </div>
            <div className='sideBarElem'>
              <div className='sideBarSeparator'>
                <h6>Ordenar por Precio</h6>
                <button className='sideBarBtn' onClick={() => activateFilter('priceMinus')}>Menor precio</button>
                <button className='sideBarBtn' onClick={() => activateFilter('pricePlus')}>Mayor precio</button>
              </div>
              <div className='sideBarSeparator'>
                <h6>Ordenar por % Descuento</h6>
                <button className='sideBarBtn' onClick={() => activateFilter('discountMinus')}>Menor %</button>
                <button className='sideBarBtn' onClick={() => activateFilter('discountPlus')}>Mayor %</button>
              </div>
              <div className='sideBarSeparator'>
                <h6>Ordenar por Fecha</h6>
                <button className='sideBarBtn' onClick={() => activateFilter('datePlus')}>Mas nuevo</button>
                <button className='sideBarBtn' onClick={() => activateFilter('dateMinus')}>Menos nuevo</button>
              </div>
              <div className='sideBarSeparator noBorder'>
                <h6>Ordenar por Valoración</h6>
                <button className='sideBarBtn' onClick={() => activateFilter('5stars')}>{star}{star}{star}{star}{star}</button>
                <button className='sideBarBtn' onClick={() => activateFilter('4stars')}>{star}{star}{star}{star}</button>
                <button className='sideBarBtn' onClick={() => activateFilter('3stars')}>{star}{star}{star}</button>
                <button className='sideBarBtn' onClick={() => activateFilter('2stars')}>{star}{star}</button>
                <button className='sideBarBtn' onClick={() => activateFilter('1stars')}>{star}</button>
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