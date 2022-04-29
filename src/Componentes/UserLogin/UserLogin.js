import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './UserLogin.css'

function UserLogin() {
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
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              <div className='form-check--passRecordar'>
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Recordarme</label>
              </div>
              <div className='form-check--passRecuperar'><a>¿Perdiste tu contraseña?</a></div>
            </div>
            <div className='userLoginForm--buttonsContainer'>
              <button type="submit" class="btn btn-primary userLoginForm--btnSesion">Iniciar sesión</button>
              <button type="submit" class="btn btn-outline-primary  userLoginForm--btnCrear">Crear cuenta</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default UserLogin