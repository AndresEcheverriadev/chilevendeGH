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

                    <div className="productInfo--tags">
                    {productTags}
                    </div>

                   

                </div>

                <div className='productBuyControls'>
                    <div className='productBuy--titles'>
                        <h5 className='productBuy'>{producto.name}</h5>
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