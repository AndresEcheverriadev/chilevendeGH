import React from 'react'
import './ProductQuantity.css'


function ProductQuantity({quantity}) {
  return (
    <>
        <p className='quantityTitle'>Cantidad</p>
        <div className='quantityPlusBtns'>
        <button id='plusbtn'>+</button>
        <input className='quantityInput' type="number" placeholder={quantity?quantity:1} />
        <button id='minusbtn'>-</button>
        </div>
        <p className='quantityTitle'>unidades</p>
    </>

  )
}

export default ProductQuantity