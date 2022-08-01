import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import CartProductDetail from '../CartProductDetail/CartProductDetail';
import { CartContext } from '../CartContext/CartContext';
import noItems from './noItems_emoji.png';
import productSet from '../../Metasite/productSet';
import CategoriesHome from '../CategoriesHome/CategoriesHome';
import VisitedHome from '../VisitedHome/VisitedHome';
import validator from 'validator'
import './CheckoutPage.css';
import CartProductList from '../CartProductDetail/CartProductList';


function CheckoutPage() {
  
  const {cartList,clearCart,cartTotalItems,cartTotalBuy} = useContext(CartContext);
  const totalProductos = productSet.length

  return (
    <div className='cartPageContainer'>
        <NavBar/>
        {
                  cartTotalItems === 0  ?
                  <div className='noitemsContainer'>
                    <img className='noItemsEmoji' src={noItems} alt="" />
                    <h5> Aún no hay productos en tu carro de compras.  </h5>
                    <h5>Tenemos mas de {totalProductos} productos. ¡Seguro hay algo especial esperando por ti!</h5>
                    <CategoriesHome/>
                    <VisitedHome/>
                  </div>
                  : 
                  <>
                  <div className="checkoutIndicatorContainer">
                      <div className='checkoutIndicatorCart'>
                        <h5>Carro de compras</h5>
                      </div>
                      <div className='checkoutIndicatorInfo indicatorActive'>
                        <h5>Datos de facturación</h5>
                      </div>
                      <div className='checkoutIndicatorReady'>
                        <h5>Pedido listo</h5>
                      </div>
                  </div>
                  <div className='inCartContainer' >
                    <div className='inputInfoCheckoutContainer'>
                      {/* <form className='createUserFormContainer'>
                        <div className="mb-3">
                          <label htmlfor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => validateEmail(e)}/>
                          <div className='createUserForm--emailError'><span>{emailError}</span></div>
                        </div>
                        <div className="mb-3">
                          <label htmlfor="exampleInputPassword1" className="form-label">Contraseña</label>
                          <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => validatePassword(e)}/>
                          <div className='createUserForm--passwordError'><span>{passwordError}</span></div>
                        </div>
                        <div className="mb-3 form-check">
                          <div className='form-check--checkTerms'>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={checkedTerms} onClick={handleTermsCheckbox}/>
                            <label class="form-check-label" htmlfor="exampleCheck1">Leí y acepto los&nbsp;<NavLink to='/' className='checkTerms--link'>Términos y Condiciones</NavLink></label>
                          </div>
                        </div>
                        <div className='createUserSelector'>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => setcheckedVendedor(!checkedVendedor)}/>
                            <label className="form-check-label" htmlfor="flexRadioDefault1">&nbsp;Quiero vender</label>
                          </div>   
                        </div>  
                        <div className='createUserForm--inputError'><span>{inputError}</span></div>
                        <div className='createUserForm--buttonsContainer'>
                          <button type="submit" className='btn btn-primary createUserForm--btnCreate' onClick={createCheck}>Crear cuenta {isVendedor}</button>
                          <NavLink to='/login'><button type="submit" className="btn btn-outline-primary  createUserForm--btnSession">Iniciar sesión</button></NavLink>
                        </div>
                      </form> */}
                    </div>
                    <div className='buyControlsContainer'>
                        <div className='sumsContainer'>
                          <h5>Resumen de compra</h5>
                            {
                              cartList.map((product) => <CartProductList key={product.id} product={product}/>)
                            }
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
                  </>
        }
      <Footer/>    
    </div>
  )
}

export default CheckoutPage