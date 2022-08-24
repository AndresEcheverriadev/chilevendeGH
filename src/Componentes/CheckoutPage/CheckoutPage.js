import React from 'react';
import { useContext } from 'react';
import {Link, NavLink} from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import CartNoItems from '../imgs/CartNoItems_emoji.png';
import productSet from '../../Metasite/productSet';
import CategoriesHome from '../CategoriesHome/CategoriesHome';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import useValidator from '../../Metasite/useValidator';
import ProductList from '../ProductList/ProductList';
import NewAddressInput from '../NewAddressInput/NewAddressInput';
import Payments from '../Payments/Payments';
import ErrorTip from '../ErrorTip/ErrorTip';
import './CheckoutPage.css';

function CheckoutPage() {
  
  const {cartList,clearCart,cartTotalItems,cartTotalBuy,isLogged,mockLogin} = useContext(CartContext);
  const totalProductos = productSet.length;
  const { inputPassword,
    validatedPassword,
    inputEmail,
    validatedEmail,
    checkedTerms,
    checkedVendedor,
    emailError,
    passwordError,
    inputError,
    createUserEmoji,
    inputType,
    isVendedor,
    setinputPassword,
    setvalidatedPassword,
    setinputEmail,
    setvalidatedEmail,
    setcheckedTerms,
    setcheckedVendedor,
    setEmailError,
    setPasswordError,
    setInputError,
    setcreateUserEmoji,
    setinputType,
    setIsVendedor,
    vendedorTitle,
    emailErrorMesagge,
    inputErrorMesagge,
    passwordErrorMesagge,
    validateEmail,
    validatePassword,
    handleTermsCheckbox,
    createCheck,
    iconVendeEmoji,
    iconCompraEmoji } = useValidator();

  return (
    <>

      {/* Modal edit Address start */}
      <div class="addressModal modal fade" id="addressModal" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Nueva dirección de envío</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <NewAddressInput/>
              </div>
          </div>
      </div>
  </div>
  {/* Modal edit Address end */}

  {/* Modal edit Billing start */}
  <div class="billingModal modal fade" id="billingModal" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nueva dirección de facturación</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <NewAddressInput/>  
          </div>
      </div>
  </div>
</div>
{/* Modal edit Billing end */}

      <div className='checkoutPageContainer'>
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
                        <div className='checkoutIndicatorInfo indicatorActive'>
                          <h5>Datos de envío</h5>
                        </div>
                        <div className='checkoutIndicatorReady'>
                          <h5>Pedido listo</h5>
                        </div>
                    </div>

                    <div className='checkoutDataContainer' >

                      <div className='inputInfoCheckout'>
                        {isLogged === true? 
                        <>
                          
                          <div className="buyerDataContainer">

                            <div className='checkoutLoginData'>
                              <h5>Dirección de envío</h5>
                              <div className='loginDataName'><h6>{`${mockLogin.nombre} ${mockLogin.apellido}`}</h6></div>
                              <div className='loginDataAddress'>
                                <h6>{mockLogin.calle}</h6>
                                <h6>{mockLogin.ciudad}</h6>
                                <h6>{mockLogin.numeroTel}</h6>
                                <h6>{mockLogin.pais}</h6>
                                <h6>{mockLogin.region}</h6>
                                <h6>{mockLogin.comuna}</h6>
                                <button data-bs-toggle="modal" data-bs-target="#addressModal" className='checkoutAddressEditBtn'>Editar dirección<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                  </svg>
                                </button>
                              </div>
                              
                            </div>

                            <div className='checkoutSelector'>
                              <h5>Método de envío</h5>
                              <select name="" id="">
                                <option value="">Selecciona método de despacho</option>
                                <optgroup label="Retiro en Tienda">
                                  <option value="">Retiro en Tienda $0</option>
                                </optgroup>
                                <optgroup label="Envío Región Metropolitana">
                                  <option value="">RM-Estandar 2 a 5 días hábiles $5.580</option>
                                </optgroup>
                                <optgroup label="Envío Nacional">
                                  <option value="">Nacional-Estandar 7 a 10 días hábiles $10.580</option>
                                </optgroup>
                              </select>
                              <ErrorTip errorText='Debes elegir método de despacho'/>
                            </div>

                            <div className='billingLoginData'>
                              <h5>Dirección de facturación</h5>
                              <div className='billingCheckContainer'>
                                <input class="billingCheck" type="checkbox" value=""></input>
                                <label>La misma que la dirección de envío</label>
                              </div>
                              <div className='billingLoginDataName'><h6>{`${mockLogin.nombre} ${mockLogin.apellido}`}</h6></div>
                              <div className='billingLoginDataAddress'>
                                <h6>{mockLogin.calle}</h6>
                                <h6>{mockLogin.ciudad}</h6>
                                <h6>{mockLogin.numeroTel}</h6>
                                <h6>{mockLogin.pais}</h6>
                                <h6>{mockLogin.region}</h6>
                                <h6>{mockLogin.comuna}</h6>
                                <button data-bs-toggle="modal" data-bs-target="#billingModal" className='billingAddressEditBtn'>Editar dirección<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                  </svg>
                                </button>
                              </div>
                              
                            </div>
                          
                          </div>
                        </>
                        : null

                        }
                        
                      </div>

                      <div className='buyControlsContainer'>
                          <div className='sumsContainer'>
                            <h5>Resumen de compra</h5>
                              {
                                cartList.map((product) => <ProductList key={product.id} product={product}/>)
                              }
                            <h6 className='subtotalSum'><b>Total ${cartTotalBuy}</b></h6>
                            <Link to='/ready' className='toPayContainer'>
                              <button variant='light' className='btnToPay' id="clickPay">Proceder al pago</button>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back toPayIcon" viewBox="0 0 16 16">
                              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
                              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"/>
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
    </>
  )
}

export default CheckoutPage