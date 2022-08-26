import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import './ProductList.css'

function ProductList({product}) {

  const {subTotalItem} = useContext(CartContext);

  return (
    <div className='productListContainer' >
      <span></span>
       <NavLink to={`/${product.category}/${product.name}`}><h6 className='productListTitle'>{product.name}</h6></NavLink>
       <img className='productListThumb' src={product.image} alt="" />
        <div className='productListQuantity'>
            <h6>${product.price}</h6>
            <h6>x{product.cantidadCompra}</h6>
            <h6 className='cartItemSubtotal--checkout'>Subtotal ${subTotalItem(product)}</h6>
        </div>
    </div>
  )
}

export default ProductList