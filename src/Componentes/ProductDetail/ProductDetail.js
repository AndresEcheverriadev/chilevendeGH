import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import productSet from '../../Metasite/productSet'
import './ProductDetail.css'
import { NavLink, useParams } from 'react-router-dom'

function ProductDetail() {

    const {productoId} = useParams();
    const productFiltered = productSet.filter(producto => producto.id === productoId);
    const productDetail = productFiltered.map((producto) => {
        const discountPercentage = Math.round(((producto.price-producto.beforePrice)/producto.beforePrice)*100);
        const [visiblePercentage, setVisiblePercentage] = useState(true);
        const productTags = producto.etiquetas.map((etiquetas) => <NavLink to={etiquetas}><h6 className='productTags'>{etiquetas}</h6></NavLink>);
        const productMateriales = producto.materiales.map((materiales) => <h6 className='productMateriales'>{materiales}</h6>);



        useEffect(() => {
            if(producto.beforePrice === 0){
            setVisiblePercentage(false);
            document.querySelector('.productDiscount').style.visibility = 'hidden';
            } 
        }, [discountPercentage]);

        




        return <div className='productDetailContainer ' producto={producto} key={producto.id}>
            

            <div className='breadcrumbData'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item "><a className='breadcrumbLinks headerLink' href={producto.category}><b>{producto.category}</b></a></li>
                    {producto.subcategories.map((subcategorias) => <li class="breadcrumb-item " ><a className='breadcrumbLinks'  href={subcategorias}>{subcategorias}</a></li>)}
                    <li class="breadcrumb-item active"></li>
                </ol>
            </nav>
            </div>

            <div className='productDetail'>

                <div className='productImages'>
                    <div className='productImages--thumbnails'>{producto.image.map((image)=> <div className='thumbnailsContainer'><img className='thumbnailsImage' src={image} alt="" /></div>)}
                        
                    </div>
                    <div className='productImages--mainContainer'>
                        <img className='productImages--mainImage'  src={producto.image[0]} alt="" />
                    </div>
                </div>

                <div className='productInfo'>
                    <div className='productInfo--titles'>
                        <h5 className='productName'><b>{producto.name}</b></h5>
                    </div>

                    <div className='productInfo--prices'>
                        <h6 className='prices--beforePrice'>{visiblePercentage === true ? `$${(producto.beforePrice).toLocaleString('es-CL')}` : ''}</h6>
                        <div className='prices--priceContainer'>
                            <h5 className='productPrice'><b>$ {(producto.price).toLocaleString('es-CL')}</b></h5>
                            <h5 className='productDiscount'>{visiblePercentage === true ? `${discountPercentage}%` : '' }</h5>
                        </div>
                        <div className="productInfo--stock">
                                <h6>20 disponibles</h6>
                        </div>
                    </div>

                    <div className="productInfo--charSet">
                        <h6 className="productCharTitle">Características principales:</h6>
                        <div className='productChar'><p className='productCharName'>Marca</p><p className='productCharUnit'>{producto.marca}</p></div>
                        <div className='productChar'><p className='productCharName'>Modelo</p><p className='productCharUnit'>{producto.modelo}</p></div>
                        <div className='productChar'><p className='productCharName'>Alto</p><p className='productCharUnit'>{producto.alto}</p></div>
                        <div className='productChar'><p className='productCharName'>Ancho</p><p className='productCharUnit'>{producto.ancho}</p></div>
                        <div className='productChar'><p className='productCharName'>Largo</p><p className='productCharUnit'>{producto.largo}</p></div>
                        <div className='productChar'><p className='productCharName'>Peso</p><p className='productCharUnit'>{producto.peso}</p></div>
                        <div className='productChar'><p className='productCharName'>Diametro</p><p className='productCharUnit'>{producto.diametro}</p></div>
                        <div className='productChar'><p className='productCharName'>Profundidad</p><p className='productCharUnit'>{producto.profundidad}</p></div>
                        <div className='productChar'><p className='productCharName'>Cantidad por compra</p><p className='productCharUnit'>{producto.cantidad}</p></div>
                        <div className='productChar'><p className='productCharName'>Colores disponibles</p><p className='productCharUnit'>{producto.coloresDisponibles}</p></div>
                        <div className='productCharMateriales'><p className='productCharName'>Materiales</p><p className='productCharUnitMateriales'>{productMateriales}</p></div>
                    </div>

                    <div className="productInfo--tags">
                        <h6 className="productTagsTitle">Etiquetas:</h6>
                        <div className="productTagsContainer">{productTags}</div>
                    </div>
                </div>

                <div className='productBuyControls'>
                    {/* <div className='productBuy--titles'>
                        <h5 className='productBuy'>{producto.name}</h5>
                    </div> */}
                    <div className='productBuy--btnContainer'>
                        <div className="btnBuyNow"><NavLink to={'/'}>Comprar ahora
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </NavLink></div>
                        <div className="btnBuyLater"><NavLink to={'/'}>Agregar al carro</NavLink></div>
                    </div>

                    <div className="productBuy--quantityContainer">
                        <p className='quantityTitle'>Cantidad:</p><input className='quantityInput' type="number" /><p className='quantityTitle'>unidades</p>
                    </div>

                    <div className="productBuy--paymentsContainer">
                        <h6 className="paymentsTitle">Medios de pago:</h6>
                        <div className='webpayIcons'><img src="/webpay.png" alt="" /></div>
                        <div className='paymentsIcons'>
                            <img className='cardImage' src="/visa.png" alt="" />
                            <img className='cardImage' src="/master.png" alt="" />
                            <img className='cardImage' src="/american.png" alt="" />
                            <img className='cardImage' src="/magna.png" alt="" />
                        </div>

                    </div>

                    <div className="productBuy--deliveryContainer">
                        <h6 className="deliveryTitle">Envío:</h6>
                        <h6 className="deliveryTitle">Entrega:</h6>



                    </div>


                </div>

            </div>

            <div className="productComplimentaryInfo">

                <div className="productDescription">
                    <h6 className="productDescriptionTitle"><b>Descripción del producto</b></h6>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>



                </div>

                <div className="productQA">
                <h6 className="productQuestionsTitle"><b>¿Tienes una pregunta?</b></h6>

                <div className="productQuestionInput">
                    <input className='inputQuestion' type="text" placeholder='tu pregunta' /><button className='btnQuestion'><p>Preguntar</p></button>
                </div>

                <div className='productQuestion'>
                    <div className='questionBullet'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg><p>¿Cuantos ciclos de carga tiene?</p>
                    </div>
                    <div className='answerBullet'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg><p>Estimado: el notebook tiene 5.600 ciclos de carga</p>

                    </div>

                </div>
                <div className='productQuestion'>
                    <div className='questionBullet'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg><p>Viene con cargador original?</p>
                    </div>
                    <div className='answerBullet'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg><p>Así es.</p>

                    </div>

                </div>



                </div>



            </div>


    </div>});

  return (
    <div className='productDetailPage'>
        <NavBar/>

            {productDetail}

        <Footer/>
    </div>
  )
}

export default ProductDetail