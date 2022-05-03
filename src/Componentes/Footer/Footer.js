import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footerContainer'>
      <div className='footerContent'>
        <div className='footerContent--Columns'>LOGO
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
        <div className='footerContent--Columns'>Suscríbete a nuestro boletín de noticias
          <div class="input-group mb-3 columnSuscribe">
          <input type="text" class="form-control" placeholder="Tu correo electrónico"></input>
          <button class="btn btn-outline-secondary btnSuscribe" type="button" id="button-addon2">Suscribirse</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer