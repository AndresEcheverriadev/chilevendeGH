import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
// import fakeUsers from '../../Metasite/loginCheck'
import Logo from '../Logo/Logo'
import WelcomeEmoji from './welcome_emoji.png'
import SuccessEmoji from './welcome_emoji_success.png'
import validator from 'validator'
import './UserLogin.css'

function UserLogin() {
  const [inputPassword, setinputPassword] = useState('');
  const [validatedPassword, setvalidatedPassword] = useState(false);
  const [inputEmail, setinputEmail] = useState('');
  const [validatedEmail, setvalidatedEmail] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [inputError, setInputError] = useState('');
  const [userLoginEmoji, setuserLoginEmoji] = useState(WelcomeEmoji);

  const emailErrorMesagge = <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg> Escribe una dirección de correo válida</span>;
  
  const inputErrorMesagge = <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg> Ingresa tus datos para continuar</span>;

  const validateEmail = (e) => {
    const inputEmail = e.target.value;
    if (validator.isEmail(inputEmail)) {
      setEmailError('');
      setinputEmail(inputEmail);
      setvalidatedEmail(true);
    } else {
      setEmailError(emailErrorMesagge);
      setvalidatedEmail(false);
    }
  } 

  const validatePassword = (e) => {
    const inputPassword = e.target.value;

    if(inputPassword) {
      setinputPassword(inputPassword);
      setvalidatedPassword(true);
    }else {
      setvalidatedPassword(false);
    }
  }

  const handleRecordar = () => {
    localStorage.setItem('Email',inputEmail);
    localStorage.setItem('Password',inputPassword);
  }

  useEffect(() => {
    if((validatedEmail === true) && (validatedPassword === true)) {
      setInputError('');
      setuserLoginEmoji(SuccessEmoji);
    }
    else {
      setuserLoginEmoji(WelcomeEmoji);
    }
  }, [validatedEmail,validatedPassword]);

  const loginCheck = (e) => {
    e.preventDefault();
    if((validatedEmail === true) && (validatedPassword === true)) {
      alert(inputPassword);
      alert(inputEmail);
      setInputError('');
    }
    else {
      setInputError(inputErrorMesagge);
    }
    
  };

 return (
    <div className='userLoginPage'>
      <div className='userLoginLogo'><NavLink to='/'><Logo/></NavLink></div>
      <div className='userLoginContainer'>
        <div className='userLoginTitles'>
          <img src={userLoginEmoji} alt='' className='userLoginTitles--WelcomeEmoji'></img> 
          <h5>Iniciar sesión</h5>
        </div>
          <form className='userLoginFormContainer'>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">Nombre de usuario o correo electrónico</label>
              <input type="email" class="form-control" id="userLoginInputEmail" aria-describedby="emailHelp"  onChange={(e) => validateEmail(e)}/>
              <div className='userLoginForm--emailError'><span>{emailError}</span></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => validatePassword(e)}/>
            </div>
            <div class="mb-3 form-check">
              <div className='form-check--passRemember'>
                <input type="checkbox" className="form-check-input"  id="exampleCheck1" onChange={handleRecordar}/>
                <label class="form-check-label" for="exampleCheck1">Recordarme</label>
              </div>
              <div className='form-check--passRecover'><NavLink to='/'>Recuperar contraseña</NavLink></div>
            </div>
            <div className='userLoginForm--inputError'><span>{inputError}</span></div>
            <div className='userLoginForm--buttonsContainer'>
              <button type="submit" className={`btn btn-primary userLoginForm--btnSession`}  onClick={loginCheck}>Iniciar sesión</button>
              <NavLink to='/crear-cuenta'><button type="submit" className="btn btn-outline-primary userLoginForm--btnCreate">Crear cuenta</button></NavLink>
            </div>
          </form>
        </div>
      </div>
  )
}

export default UserLogin