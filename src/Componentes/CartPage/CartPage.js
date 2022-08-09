import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom";
import {CartContext}  from '../CartContext/CartContext'
import NavBar from '../NavBar/NavBar'
import CategoriesHome from '../CategoriesHome/CategoriesHome'
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Footer from '../Footer/Footer'
import CartProductDetail from '../CartProductDetail/CartProductDetail';
import CartNoItems from '../imgs/CartNoItems_emoji.png'
import productSet from '../../Metasite/productSet';
import Payments from '../Payments/Payments';
import './CartPage.css'

function CartPage() {
  
  const {cartList,clearCart,cartTotalItems,cartTotalBuy} = useContext(CartContext);
  const totalProductos = productSet.length

  return (
    <div className='cartPageContainer'>
        <NavBar/>
        {
                  cartTotalItems === 0  ?
                  <div className='noitemsContainer'>
                    <img className='noItemsEmoji' src={CartNoItems} alt="" />
                    <h5> Aún no hay productos en tu carro de compras.  </h5>
                    <h5>Tenemos mas de {totalProductos} productos. ¡Seguro hay algo especial esperando por ti!</h5>
                    <CategoriesHome/>
                    <ProductCarousel title='Productos sugeridos' linktitle='Ver todos'/>
                  </div>
                  : 
                  <>
                  <div className="checkoutIndicatorContainer">
                      <div className='checkoutIndicatorCart indicatorActive'>
                        <h5>Carro de compras</h5>
                      </div>
                      <div className='checkoutIndicatorInfo'>
                        <h5>Datos de envío</h5>
                      </div>
                      <div className='checkoutIndicatorReady'>
                        <h5>Pedido listo</h5>
                      </div>
                  </div>
                  <div className='inCartContainer' >
                    <div className='cartListContainer'>
                      <div className='cartListTitles'>
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
                            <button variant='light' className='btnToCheckout' id="clickCheckout">Proceder al envío</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                          </Link> 
                        </div>
                        <Payments/>
                    </div> 
                  </div>
                  </>
        }
      <Footer/>    
    </div>
  )
}

export default CartPage