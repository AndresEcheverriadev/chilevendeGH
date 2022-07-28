import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext.js';
import DeleteItem from '../DeleteItem/DeleteItem.js'
import './BagItem.css'

function BagItem({product}) {
    const {deleteItem} = useContext(CartContext);
    const calcSubTotalItem = (product.cantidad * product.price).toLocaleString(); 
   
  return (  
    <div className='bagItemContainer'>
        <div className='bagItemData'>
            <div className='bagItemImgContainer'>
              <img alt='' src={product.image} className='bagItemImage'></img>
            </div>
            <div className='bagItemTxtContainer'>
              <h6 className='bagItemTitle'>{product.name}</h6>
              <div className='bagItemProductTxtContainer'>
                <h6 className='bagItemPrice'>Precio: $ {product.price}</h6>
                <h6 className='bagItemQuantity'>Cantidad: {product.cantidad}</h6>
                <h6 className='bagItemSubtotal'>Subtotal: $ {calcSubTotalItem}</h6>
              </div>
            </div>
            <button variant='outline-secondary' onClick={() => deleteItem(product.id)} className='btnDeleteItem'>Quitar producto <DeleteItem /></button>
        </div>
        <hr></hr>
    </div>
  )
}

export default BagItem