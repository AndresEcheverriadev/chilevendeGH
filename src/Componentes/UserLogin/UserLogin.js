import React from 'react'
import './UserLogin.css'

function UserLogin() {
  return (
    <div className='userLoginPage'>
      <div className='userLoginContainer'>
        <h4>¡Hola!</h4> 
        <h5>Para iniciar sesión ingresa tus datos</h5>
          <form className='userLoginContainer--bsFormContainer'>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre de usuario o correo electrónico</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Recordarme</label>
              <a>¿Perdiste tu contraseña?</a>
            </div>
            <div className=''>
              <button type="submit" class="btn btn-primary bsFormContainer--Btn">Iniciar sesión</button>
              <button type="submit" class="btn btn-primary bsFormContainer--Btn">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default UserLogin