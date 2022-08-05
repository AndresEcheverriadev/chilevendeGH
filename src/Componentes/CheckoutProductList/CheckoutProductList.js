import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext';
import './CheckoutProductList.css'

function CheckoutProductList({product}) {
    const {subTotalItem} = useContext(CartContext);

  return (
    <div className='cartItemData--checkout'>
       <h6 className='cartItemTitle--checkout'>{product.name}</h6>
        <div className='cartItemQuantity--checkout'>
            <h6>${product.price}</h6>
            <h6>x{product.cantidadCompra}</h6>
            <h6 className='cartItemSubtotal--checkout'>Subtotal ${subTotalItem(product)}</h6>
        </div>
    </div>
  )
}

export default CheckoutProductList