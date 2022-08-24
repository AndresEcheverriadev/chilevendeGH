import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import NavBar from '../NavBar/NavBar';
import CategoriesHome from '../CategoriesHome/CategoriesHome';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Footer from '../Footer/Footer';
import CartNoItems from '../imgs/CartNoItems_emoji.png';
import Success from '../imgs/Success_emoji.png';
import productSet from '../../Metasite/productSet';
import ProductList from '../ProductList/ProductList';
import './ReadyBuyPage.css';

function ReadyBuyPage() {

  const {cartTotalItems,isLogged,cartList,cartTotalBuy,mockLogin} = useContext(CartContext);
  const totalProductos = productSet.length;

  return (
    <div className='ReadyBuyPageContainer'>
        <NavBar/>
        {
                  cartTotalItems === 0  ?
                  <div className='noitemsContainer'>
                    <img className='noItemsEmoji' src={CartNoItems} alt="" />
                    <h5> Aún no hay productos en tu carro de compras.  </h5>
                    <h5>Tenemos mas de {totalProductos} productos. ¡Seguro hay algo especial esperando por ti!</h5>
                    <CategoriesHome/>
                    <ProductCarousel/>
                  </div>
                  : 
                  <>
                  <div className="checkoutIndicatorContainer">
                      <div className='checkoutIndicatorCart'>
                        <h5>Carro de compras</h5>
                      </div>
                      <div className='checkoutIndicatorInfo'>
                        <h5>Datos de envío</h5>
                      </div>
                      <div className='checkoutIndicatorReady indicatorActive'>
                        <h5>Pedido listo</h5>
                      </div>
                  </div>

                  <div className='readyMessaggeContainer' >
                    <h5>Listo! Tu compra fue realizada con éxito.</h5>
                    <img className='successEmoji' src={Success} alt="" /> 
                    <div className='successDataContainer'>
                          <h5>Resumen de compra</h5>
                            {
                              cartList.map((product) => <ProductList key={product.id} product={product}/>)
                            }
                          <div className='successDataShipping'>
                            <h5>Dirección de envío</h5>
                            <div className='successDataAddress'>
                              <h6>{mockLogin.calle}</h6>
                              <h6>{mockLogin.ciudad}</h6>
                              <h6>{mockLogin.numeroTel}</h6>
                              <h6>{mockLogin.pais}</h6>
                              <h6>{mockLogin.region}</h6>
                              <h6>{mockLogin.comuna}</h6>
                            </div>
                            <div className='spacer'></div>
                            <h5>Método de envío</h5>
                            <div className='successDataMethod'><h6>RM-Estandar 2 a 5 días hábiles $5.580</h6></div>
                          </div>
                          <h6 className='subtotalSum'><b>Total ${cartTotalBuy}</b></h6>
                    </div>
                  </div>
                  </>
        }
      <Footer/>    
    </div>
  )
}

export default ReadyBuyPage