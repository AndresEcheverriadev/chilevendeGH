import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import fakeUsers from '../../Metasite/loginCheck'
import Logo from '../Logo/Logo'
import validator from 'validator'
import './UserLogin.css'

function UserLogin() {

  
  const [inputPassword, setinputPassword] = useState('');

  const emailErrorMesagge = <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg> Escribe una dirección de correo válida</span>;

  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    const inputEmail = e.target.value
  
    if (validator.isEmail(inputEmail)) {
      setEmailError('')
    } else {
      setEmailError(emailErrorMesagge)
    }
  }

  const loginCheck = (e) => {
    e.preventDefault();
    alert(inputPassword)
  };






 return (
    <div className='userLoginPage'>
      <div className='userLoginLogo'><NavLink to='/'><Logo/></NavLink></div>
      <div className='userLoginContainer'>
        <div className='userLoginTitles'>
          <h4>¡Hola!</h4> 
          <h5>Para iniciar sesión ingresa tus datos</h5>
        </div>
          <form className='userLoginFormContainer'>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">Nombre de usuario o correo electrónico</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => validateEmail(e)}/>
              <div className='userLoginForm--error'><span>{emailError}</span></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e) => setinputPassword(e.target.value)}/>
            </div>
            <div class="mb-3 form-check">
              <div className='form-check--passRecordar'>
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Recordarme</label>
              </div>
              <div className='form-check--passRecuperar'><a>¿Perdiste tu contraseña?</a></div>
            </div>
            <div className='userLoginForm--buttonsContainer'>
              <button type="submit" class="btn btn-primary userLoginForm--btnSesion" onClick={loginCheck}>Iniciar sesión</button>
              <button type="submit" class="btn btn-outline-primary  userLoginForm--btnCrear">Crear cuenta</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default UserLogin