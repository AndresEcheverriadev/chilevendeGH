import React from 'react'
import './BagItemCheckout.css'

function BagItemCheckout({product}) {
    const calcSubTotalItem = (product.cantidad * product.Price).toLocaleString(); 
   
  return (  
    <div className='bagItemContainer--Checkout'>
        <div className='bagItemData--Checkout'>
            <div className='bagItemImgContainer--Checkout'>
              <img alt='' src={product.ImageURL} className='bagItemImage'></img>
            </div>
            <div className='bagItemTxtContainer--Checkout'>
              <h6 className='bagItemTitle'>{product.Name}</h6>
              <div className='bagItemProductTxtContainer--Checkout'>
                <h6 className='bagItemPrice'>Precio: $ {product.Price}</h6>
                <h6 className='bagItemQuantity'>Cantidad: {product.cantidad}</h6>
                <h6 className='bagItemSubtotal'>Subtotal: $ {calcSubTotalItem}</h6>
              </div>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default BagItemCheckout