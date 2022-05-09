import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
// import fakeUsers from '../../Metasite/loginCheck'
import Logo from '../Logo/Logo'
import validator from 'validator'
import CompraEmoji from './compra_emoji.png'
import VendeEmoji from './vende_emoji.png'
import './CreateUser.css'

function createUser() {

  const [inputPassword, setinputPassword] = useState('');
  const [validatedPassword, setvalidatedPassword] = useState(false);
  const [inputEmail, setinputEmail] = useState('');
  const [validatedEmail, setvalidatedEmail] = useState(false);
  const [checkedTerms, setcheckedTerms] = useState(false);
  const [checkedType, setcheckedType] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [inputError, setInputError] = useState('');
  const [createUserEmoji, setcreateUserEmoji] = useState(CompraEmoji);

  const emailErrorMesagge = <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg> Escribe una dirección de correo válida</span>;
  
  const inputErrorMesagge = (textError) => <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>{textError}</span>;

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
      setvalidatedPassword(false)
    }
  }

  const handleRadioType = () => {
    setcheckedType(true)
  }

  const handleTermsCheckbox = () => {
    setcheckedTerms(!checkedTerms)
  }

  useEffect(() => {
    if((validatedEmail === true) && (validatedPassword === true) && (checkedTerms === true) && (checkedType === true)) {
      setInputError('');
    }
    else {
    }
  }, [validatedEmail,validatedPassword,checkedTerms,checkedType])

  const createCheck = (e) => {
    e.preventDefault();
    if((validatedEmail === true) && (validatedPassword === true) && (checkedTerms === true) && (checkedType === true)) {
      alert(inputPassword);
      alert(inputEmail);
    }
    else if ((validatedEmail === true) && (validatedPassword === true) && (checkedTerms ==! true) && (checkedType === true)) {
      setInputError(inputErrorMesagge('Faltan TYC'));
    }
    else if ((validatedEmail === true) && (validatedPassword === true) && (checkedTerms === true) && (checkedType ==! true)) {
      setInputError(inputErrorMesagge('Faltan elegir tipo'));
    }
    else {
      setInputError(inputErrorMesagge('Debes ingresar tus datos para crear tu cuenta'));
    }
    
  };
  
 return (
    <div className='createUserPage'>
      <div className='createUserLogo'><NavLink to='/'><Logo/></NavLink></div>
      <div className='createUserContainer'>
        <div className='createUserTitles'>
          <img src={createUserEmoji} alt='' className='createUserTitles--chileEmoji'></img> 
          <h5>Crear cuenta</h5>
        </div>
        <div className='createUserSelector'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleRadioType} onClick={() => setcreateUserEmoji(CompraEmoji)}/>
            <label className="form-check-label" htmlfor="flexRadioDefault1">Quiero comprar</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleRadioType} onClick={() => setcreateUserEmoji(VendeEmoji)}/>
            <label className="form-check-label" htmlfor="flexRadioDefault1">Quiero vender</label>
          </div>   
        </div>
        <form className='createUserFormContainer'>
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => validateEmail(e)}/>
            <div className='createUserForm--emailError'><span>{emailError}</span></div>
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => validatePassword(e)}/>
          </div>
          <div className="mb-3 form-check">
            <div className='form-check--checkTerms'>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={checkedTerms} onClick={handleTermsCheckbox}/>
              <label class="form-check-label" htmlfor="exampleCheck1">Leí y acepto los&nbsp;<NavLink to='/' className='checkTerms--link'>Términos y Condiciones</NavLink></label>
            </div>
          </div>
          <div className='createUserForm--inputError'><span>{inputError}</span></div>
          <div className='createUserForm--buttonsContainer'>
            <button type="submit" className='btn btn-primary createUserForm--btnCreate' onClick={createCheck}>Crear cuenta</button>
            <NavLink to='/login'><button type="submit" className="btn btn-outline-primary  createUserForm--btnSession">Iniciar sesión</button></NavLink>
          </div>
        </form>
        </div>
      </div>
  )
}

export default createUser