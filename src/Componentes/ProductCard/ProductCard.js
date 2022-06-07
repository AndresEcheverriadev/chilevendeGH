import React, { useState } from 'react'
import './ProductCard.css'

function ProductCard({producto}) {
  const discountPercentage = Math.round(((producto.price-producto.beforePrice)/producto.beforePrice)*100);
  const [visible, setVisible] = useState(true)

  return (
    < div className='productCard'>
            <div className='productCardImageContainer'><img className='productCardImage' src={producto.image} alt='' /></div>
            <div class="productCardBody">
              <div className='bodyPrices'>
                <p className='bodyBeforePrice'>$ {(producto.beforePrice).toLocaleString('es-CL')}</p>
                <div className='bodyPriceContainer'>
                  <h6 className='bodyPrice'><b>$ {(producto.price).toLocaleString('es-CL')}</b></h6>
                  <h6 className="bodyDiscount">{discountPercentage}%</h6>
                </div>
              </div>
              <h6 className='cardTitle'>{producto.name}</h6>
            </div>
    </div>
  )
}

export default ProductCard