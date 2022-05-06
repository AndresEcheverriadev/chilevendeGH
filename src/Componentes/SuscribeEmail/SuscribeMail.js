import React, { useState } from 'react'
import validator from 'validator'
import './SuscribeMail.css'

function SuscribeMail() {

    const [emailError, setEmailError] = useState('');

    const emailErrorMesagge = <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg> Escribe una dirección de correo válida</span>;

    const validateEmail = (e) => {
        const inputEmail = e.target.value
    
        if (validator.isEmail(inputEmail)) {
        setEmailError('')
        } else {
        setEmailError(emailErrorMesagge)
        }
    }

  return (
    <div className='suscribeMail--Container'>
        <h5>Suscríbete a nuestro boletín de noticias</h5>
        <div className='suscribeMail--Inputs'>
            <input type='email' class="form-control" placeholder="Tu correo electrónico" onChange={(e) => validateEmail(e)}></input>
            <button class="btn btn-outline-secondary btnSuscribe" type="button" id="button-addon2">Suscribirse</button>
        </div>
        <div className='suscribeMail--InputError'><span>{emailError}</span></div>
    </div>
  )
}

export default SuscribeMail