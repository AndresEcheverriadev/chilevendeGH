import React, {useEffect, useState} from 'react';
import useValidator from '../../Metasite/useValidator';
import {NavLink} from 'react-router-dom';
import Logo from '../Logo/Logo';
import ErrorTip from '../ErrorTip/ErrorTip';
import './CreateUser.css'; 

function createUser() {

  const {createUserEmoji,
    validateEmail,
    validateNewPassword,
    checkedTerms,
    handleCheckedVendedor,
    checkedVendedor,
    inputType,
    checkedVendedorIcon,
    checkedCompradorIcon,
    newUserCheck,
    handleTermsCheckbox} = useValidator();

    useEffect(() => {
      if(checkedVendedor === true) {
        checkedVendedorIcon();
      }
      else {
        checkedCompradorIcon();
      };
    }, [checkedVendedor])

 return (
    <div className='createUserPage'>
      <div className='createUserLogo'><NavLink to='/'><Logo/></NavLink></div>
      <div className='createUserContainer'>
        <div className='createUserTitles'>
          <img src={createUserEmoji} alt='' className='createUserTitles--userEmoji'></img> 
          <h5>Crear cuenta {inputType} </h5>
        </div>
        <form className='createUserFormContainer'>
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => validateEmail(e)}/>
            <ErrorTip errorText='Escribe una dirección de correo válida' name={'emailErrorTip'}/>
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => validateNewPassword(e)}/>
            <ErrorTip errorText='La contraseña debe tener al menos una letra mayúscula, un número, un símbolo y una longitud de 8 caracteres' name={'newPasswordErrorTip'}/>
          </div>
          <div className="mb-3 form-check">
            <div className='form-check--checkTerms'>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={checkedTerms} onClick={handleTermsCheckbox}/>
              <label class="form-check-label" htmlfor="exampleCheck1">Leí y acepto los&nbsp;<NavLink to='/' className='checkTerms--link'>Términos y Condiciones</NavLink></label>
            </div>
            <div className="form-check checkVendedor">
              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleCheckedVendedor}/>
              <label className="form-check-label" htmlfor="flexRadioDefault1">&nbsp;Quiero vender</label>
            </div>
          </div>
          <ErrorTip errorText='Debes aceptar los Términos y Condiciones' name={'termsErrorTip'}/> 
          <ErrorTip errorText='Debes ingresar tus datos correctamente' name={'newUserErrorTip'}/>  
          <div className='createUserForm--buttonsContainer'>
            <button type="submit" className='btn btn-primary createUserForm--btnCreate' onClick={newUserCheck}>Crear cuenta {inputType}</button>
            <NavLink to='/login'><button type="submit" className="btn btn-outline-primary  createUserForm--btnSession">Iniciar sesión</button></NavLink>
          </div>
        </form>
        <div className='createUserPrivacyDisclaimer'>
          <p>Sus datos personales se utilizarán para respaldar su experiencia en este sitio web, para administrar el acceso a su cuenta y para otros fines descritos en nuestro política de privacidad.</p>
        </div>
        </div>
      </div>
  )
}

export default createUser