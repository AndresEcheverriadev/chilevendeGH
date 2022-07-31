import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {CartContext}  from '../CartContext/CartContext'
import CartProductDetail from '../CartProductDetail/CartProductDetail';
import ClearCart from '../ClearCart/ClearCart.js' 
import CheckoutContinue from '../CheckoutContinue/CheckoutContinue.js'
import './CartPage.css'

function CartPage() {

  const {cartList,clearCart,cartTotalItems,cartTotalBuy} = useContext(CartContext);

  return (
    <div className='cartPageContainer'>
        <NavBar/>
        {
                  cartTotalItems === 0  ?
                  <div className='noitemsContainer'>
                    <h6> Aún no hay productos en tu bolsa de compra.  </h6>
                    <h6>¡Seguro hay algo especial esperando por ti!</h6>
                    <Link to='/' className='linkBtnContainer'>
                      <button variant='light' className='btnBackItems'>Volver a los productos</button>
                    </Link> 
                  </div>
                  : 
                  <div className='inCartContainer' >
                    <div className='cartListContainer'>
                      <div className='cartListTitles'>
                        <h5>Tu Carro de compras</h5>
                        <h6 className='totalProductos'>{cartTotalItems} productos</h6>
                      </div>
                      
                      {
                        cartList.map((product) => <CartProductDetail key={product.id} product={product}/>)
                      }
                    </div>
                    <div className='buyControlsContainer'>
                        <div className='sumsContainer'>
                          <h5>Resumen de compra</h5>
                          <h6 className='subtotalSum'><b>Total ${cartTotalBuy}</b></h6>
                          <Link to='/checkout' className='toCheckoutContainer'>
                            <button variant='light' className='btnToCheckout' id="clickCheckout">Proceder al pago</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back tocheckoutIcon" viewBox="0 0 16 16">
                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"/>
                            </svg>
                          </Link> 
                        </div>
                        <div className="buyControls--paymentsContainer">
                          <h6 className="paymentsTitle">Medios de pago</h6>
                          <div className='webpayIcons'><img src="/webpay.png" alt="" /></div>
                          <div className='paymentsIcons'>
                              <img className='cardImage' src="/visa.png" alt="" />
                              <img className='cardImage' src="/master.png" alt="" />
                              <img className='cardImage' src="/american.png" alt="" />
                              <img className='cardImage' src="/magna.png" alt="" />
                          </div>
                          <div className="paymentsSecure">
                              <h6 className='paymentsSecureTitle'>Transacción segura</h6>
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                              </svg>
                          </div>
                        </div>
                    </div> 
                  </div>
        }
      <Footer/>    
    </div>
  )
}

export default CartPage