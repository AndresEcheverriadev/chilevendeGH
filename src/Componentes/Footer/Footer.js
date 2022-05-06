import React from 'react'
import logoFooter from './LogoCVHorizontalbn.png'
import './Footer.css'

function Footer() {

  return (
    <footer className='footerContainer'>
      <div className='footerLogoContainer'>
        <img src={logoFooter} className='footerLogoContainer--Logo'></img>
      </div>
      <div className='footerContent'>
        <div className='footerContent--Columns'>
          <li>Avenida Providencia 1208 Oficina 1603</li>
          <li>Providencia, Santiago, Chile</li>
          <li>Contacto Ventas: +56 9 4291 1991</li>
          <li>Contacto Compras: +56 9 4291 1939</li>
          <li>Email: contacto@chilevende.cl</li>
        </div>
        <div className='footerContent--Columns'>Sobre Chilevende.cl
            <li>Quienes somos</li>
            <li>Términos y Condiciones</li>
            <li>Política de privacidad</li>
        </div>
        <div className='footerContent--Columns'>Ayuda</div>
        <div className='footerContent--Columns'>Redes sociales</div>
        
      </div>
    </footer>
  )
}

export default Footer