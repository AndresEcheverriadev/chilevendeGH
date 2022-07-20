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

    useEffect(() => {
      if(activatedFilters.length === 0) {
        setExistFilter(false);
        setCheckedPrice(false);
        setCheckedSale(false);
        setCheckedNew(false);
        setChecked5stars(false); 
        setChecked4stars(false); 
        setChecked3stars(false); 
        setChecked2stars(false); 
        setChecked1stars(false); 
      }else {
        setExistFilter(true);
      };

    }, [activatedFilters]);
    



    const clearFilters = () => {
      updateFilterSet([]);
    };

    const [checkedPrice,setCheckedPrice] = useState(false);
    const [checkedSale,setCheckedSale] = useState(false);
    const [checkedNew,setCheckedNew] = useState(false);
    const [checked5stars,setChecked5stars] = useState(false);
    const [checked4stars,setChecked4stars] = useState(false);
    const [checked3stars,setChecked3stars] = useState(false);
    const [checked2stars,setChecked2stars] = useState(false);
    const [checked1stars,setChecked1stars] = useState(false);

    const activateFilter = (filterBtn) => {
      switch(filterBtn) {
        case '<10000':
          setCheckedPrice(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === 'Menos de $ 10.000') {
              filterSet.splice(i, 1); 
              setCheckedPrice(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'Menos de $ 10.000',id:filterBtn}]);
          break;
        case 'oferta':
          setCheckedSale(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === 'En oferta') {
              filterSet.splice(i, 1); 
              setCheckedSale(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'En oferta',id:filterBtn}]);          
          break;
        case 'nuevos':
          setCheckedNew(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === 'Recién llegados') {
              filterSet.splice(i, 1); 
              setCheckedNew(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'Recién llegados',id:filterBtn}]);          
          break;
        case '5stars':
          setChecked5stars(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === '5stars') {
              filterSet.splice(i, 1); 
              setChecked5stars(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'5stars',id:filterBtn}]);          
          break;
        case '4stars':
          setChecked4stars(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === '4stars') {
              filterSet.splice(i, 1); 
              setChecked4stars(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'4stars',id:filterBtn}]);          
          break;
        case '3stars':
          setChecked3stars(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === '3stars') {
              filterSet.splice(i, 1); 
              setChecked3stars(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'3stars',id:filterBtn}]);          
          break;
        case '2stars':
          setChecked2stars(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === '2stars') {
              filterSet.splice(i, 1); 
              setChecked2stars(false); 
              return
            };
          };
          updateFilterSet(filterSet =>[...filterSet,{name:'2stars',id:filterBtn}]);          
          break;
        case '1stars':
          setChecked1stars(true);
          for( var i = 0; i < filterSet.length; i++){ 
            if (filterSet[i].name === '1stars') {
              filterSet.splice(i, 1); 
              setChecked1stars(false); 
              return
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
        <div className='productsSortingContainer'>
          <div className='sortBtn'>
            <h6>Ordenar por</h6>
            <button>Precio mayor</button>
          </div>
        </div>


        <div className="productsCategoryContainer">

          <div className='productsCategorySideBar'>
            <div className='sideBarElem'>
              <div className='productsLengthContainer'>
              {productCardsCategory.length > 1? <><div className='productsLength'>{productCardsCategory.length}</div><h6>productos encontrados</h6></>  : <><div className='productsLength'>{productCardsCategory.length}</div><h6>producto encontrado</h6></>}
              </div>
              <div className='filterBtnContainer' id='filterBtnContainer'>
                {activatedFilters}
              </div>
              {existFilter === true ? <><button className='clearFiltersBtn' id='clearfilterBtn'  onClick={()=> clearFilters()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>Borrar filtros
              </button></> : null}
            </div>
            <div className='sideBarElem'>
              <div className='sideBarSeparator'>
                <h6><b>Rango de precio</b></h6>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 10.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 25.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 50.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 100.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 250.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 500.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">hasta $ 1.000.000</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value=""  checked={checkedPrice} onChange={() => activateFilter('10000')}></input>
                  <label class="form-check-label" for="flexCheckDefault">Más de $ 1.000.000</label>
                </div>
              </div>
              <div className='sideBarSeparator'>
                <h6><b>En oferta</b></h6>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checkedSale} onChange={() => activateFilter('oferta')}></input>
                  <label class="form-check-label" for="flexCheckDefault">En oferta</label>
                </div>
              </div>
              <div className='sideBarSeparator'>
                <h6><b>Nuevos productos</b></h6>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checkedNew} onChange={() => activateFilter('nuevos')}></input>
                  <label class="form-check-label" for="flexCheckDefault">Recien llegados</label>
                </div>
              </div>
              <div className='sideBarSeparator'>
                <h6><b>Mejor valorados</b></h6>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checked5stars} onChange={() => activateFilter('5stars')}></input>
                  <label class="form-check-label" for="flexCheckDefault">{star}{star}{star}{star}{star}</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checked4stars} onChange={() => activateFilter('4stars')}></input>
                  <label class="form-check-label" for="flexCheckDefault">{star}{star}{star}{star}</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checked3stars} onChange={() => activateFilter('3stars')}></input>
                  <label class="form-check-label" for="flexCheckDefault">{star}{star}{star}</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checked2stars} onChange={() => activateFilter('2stars')}></input>
                  <label class="form-check-label" for="flexCheckDefault">{star}{star}</label>
                </div>
                <div className='checkContainers'>
                  <input class="form-check-input sideBarBtn" type="checkbox" value="" checked={checked1stars} onChange={() => activateFilter('1stars')}></input>
                  <label class="form-check-label" for="flexCheckDefault">{star}</label>
                </div>

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