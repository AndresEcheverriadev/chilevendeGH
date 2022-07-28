import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {useContext} from 'react'
import {CartContext}  from '../CartContext/CartContext'
import ClearCart from '../ClearCart/ClearCart.js' 
import DeleteItem from '../DeleteItem/DeleteItem' 
import CheckoutContinue from '../CheckoutContinue/CheckoutContinue.js'
import './CartPage.css'


function CartPage() {

  const {cartList,deleteItem,addToBag,clearBag,itemsFinder,NotItems,calcTotalItems,calcSumTotalItems} = useContext(CartContext);

  
    const btnClearBag = () => {
      clearBag();
    }
  
    const localeSumTotalItems = calcTotalItems;

    useEffect(() => {
      itemsFinder();
    }, [cartList,itemsFinder])
    


  return (
    <div className='cartPageContainer'>
        <NavBar/>
        {
                  NotItems === true ?
                  <div className='noitemsContainer'>
                    <h6> Aún no hay productos en tu bolsa de compra.  </h6>
                    <h6>¡Seguro hay algo especial esperando por ti!</h6>
                    <Link to='/' className='linkBtnContainer'>
                      <button variant='light' className='btnBackItems'>Volver a los productos</button>
                    </Link> 
                  </div>
                  : 
                  <div className='inBagContainer' >
                    <div className='bagListContainer'>
                      {
                        cartList.map((product) => 
                        <div key={product.id} product={product} className='bagItemContainer'>
                          <div className='bagItemData'>
                              <div className='bagItemImgContainer'>
                                <img alt='' src={product.image} className='bagItemImage'></img>
                              </div>
                              <div className='bagItemTxtContainer'>
                                <h6 className='bagItemTitle'>{product.name}</h6>
                                <div className='bagItemProductTxtContainer'>
                                  <h6 className='bagItemPrice'>Precio: $ {product.price}</h6>
                                  <h6 className='bagItemQuantity'>Cantidad: {product.cantidad}</h6>
                                  <h6 className='bagItemSubtotal'>Subtotal: $ {product.cantidad * product.price}</h6>
                                </div>
                              </div>
                              <button variant='outline-secondary' onClick={() => deleteItem(product.id)} className='btnDeleteItem'>Quitar producto <DeleteItem /></button>
                          </div>
                          <hr></hr>
                        </div>
                        )
                      }
                    </div>
                    <div className='buyControlsContainer'>
                        <button variant='outline-secondary' className='btnClearBag' onClick={btnClearBag}>Limpiar bolsa de compras<ClearCart /></button>
                        <hr></hr>
                        <div className='sumsContainer'>
                          <h6 className='subtotalSum'>Total: ${localeSumTotalItems}</h6>
                          <h6 className='totalProductos'>Cantidad de productos: {calcSumTotalItems}</h6>
                        </div>
                        <Link to='/checkout' className='linkBtnContainer'>
                          <button variant='light' className='btnToCheckout' id="clickCheckout">Proceder al pago <CheckoutContinue/></button>
                        </Link> 
                    </div> 
                  </div>
        }
      <Footer/>    
    </div>
  )
}

export default CartPage