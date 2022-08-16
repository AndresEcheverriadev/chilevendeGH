import React from 'react'
import ErrorTip from '../ErrorTip/ErrorTip';
import './NewUserInput.css'

function NewUserInput() {

  return (
    <form className='newUserFormContainer'>
        <div className='newUserFormInputs'>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Rut' />
        <input type="text" placeholder='Número de Teléfono' />
        <label>Fecha de nacimiento</label><input type="date" />
        <label>Género(opcional)</label>
        <select name="" id="">
            <option value="Región">Femenino</option>
            <option value="Región">Masculino</option>
            <option value="Región">Otro</option>
            <option value="Región">Prefiero no decirlo</option>
        </select>
        </div>
        <button className='btnUser'>Guardar<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        </button>
        <div className='createUserForm--inputError'><ErrorTip errorText='Debes completar toda la información'/></div> 
    </form>
  )
}

export default NewUserInput