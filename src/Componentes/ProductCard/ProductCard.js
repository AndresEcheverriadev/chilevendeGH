import React from 'react'
import demoImg from './demoimg.jpg'
import './ProductCard.css'

function ProductCard() {
  return (
    < div className='productCard'>
            <div className='productCardImageContainer'><img className='productCardImage' src={demoImg} alt="..." /></div>
            <div class="productCardBody">
              <div className='bodyPrices'>
                <p className='bodyBeforePrice'>$ 85.990</p>
                <div className='bodyPriceContainer'>
                  <h6 className='bodyPrice'><b>$ 74.990</b></h6>
                  <h6 className="bodyDiscount">-13%</h6>
                </div>
              </div>
              <h6 className='cardTitle'>Pistola Llave de Impacto 320NM 1/2 - 2 Baterias 21V</h6>
            </div>
    </div>
  )
}

export default ProductCard