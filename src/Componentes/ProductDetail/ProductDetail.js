import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import productSet from '../../Metasite/productSet'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const {productoId} = useParams();
    const productFiltered = productSet.filter(producto => producto.id === productoId);
    const productDetail = productFiltered.map((producto) => {
        const discountPercentage = Math.round(((producto.price-producto.beforePrice)/producto.beforePrice)*100);
        const [visiblePercentage, setVisiblePercentage] = useState(true);
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
                    <li class="breadcrumb-item "><a className='breadcrumbLinks headerLink' href={producto.categories[0]}><b>{producto.categories[0]}</b></a></li>
                    <li class="breadcrumb-item " ><a className='breadcrumbLinks'  href={producto.categories[1]}>{producto.categories[1]}</a></li>
                    <li class="breadcrumb-item " ><a className='breadcrumbLinks' href={producto.categories[2]}>{producto.categories[2]}</a></li>
                    <li class="breadcrumb-item active"></li>
                </ol>
            </nav>
            </div>

            <div className='productDetail'>

                <div className='productImages'>
                    <div className='productImages--thumbnails'>
                        <div className='thumbnailsContainer'><img className='thumbnailsImage' src={producto.image[0]} alt="" /></div>
                        <div className='thumbnailsContainer'><img className='thumbnailsImage' src={producto.image[1]} alt="" /></div>
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

                    <div className="productInfo--description">
                        <h6>{producto.etiquetas}</h6>
                    </div>

                   

                </div>

                <div className='productBuyControls'>
                    <div className='productBuy--titles'>
                        <h5 className='productBuy'>{producto.name}</h5>
                    </div>
                </div>

            </div>
    </div>}

    );

  return (
    <div className='productDetailPage'>
        <NavBar/>

            {productDetail}

        <Footer/>
    </div>
  )
}

export default ProductDetail