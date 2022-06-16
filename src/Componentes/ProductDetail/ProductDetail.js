import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import productSet from '../../Metasite/productSet'
import './ProductDetail.css' 
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const {productoId} = useParams();
    const productFiltered = productSet.filter(producto => producto.id == productoId);
    const productDetail = productFiltered.map((producto) => { 
        return <div className='productData col-sm-12	col-md-12	col-lg-12	col-xl-12	col-xxl-12' producto={producto} key={producto.id}>
            <div className='breadcrumbData'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">{producto.categories[0]}</a></li>
                    <li class="breadcrumb-item" ><a href="#">{producto.categories[1]}</a></li>
                    <li class="breadcrumb-item" ><a href="#">{producto.categories[2]}</a></li>
                    <li class="breadcrumb-item active">{producto.name}</li>
                </ol>
            </nav>
            </div>
            <div className='productDetail'>
                <div className='productImages'>
                    <div className='productImages--Thumbnails'>
                         <div className='ThumbnailsContainer'><img src={producto.image} alt="" /></div>
                    </div>
                    <div className='productImages--Main'><img src={producto.image} alt="" /></div>
                </div>
                <div className='productInfo'>
                    <h5 className='productName'>{producto.name}</h5>
                </div>
            </div>
    </div>}
    
    );

  return (
    <div className='productDetailContainer'>
        <NavBar/>
        
            {productDetail}

        <Footer/>
    </div>
  )
}

export default ProductDetail