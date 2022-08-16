import React from 'react'
import ErrorTip from '../ErrorTip/ErrorTip';
import './NewAddressInput.css'

function NewAddressInput({title}) {

  return (
    <form className='newAddressFormContainer'>
        {title?<h5>Añadir dirección de {title}</h5> : null}
        <div className='newAddressFormInputs'>
        <input type="text" placeholder='Calle y número' />
        <input type="text" placeholder='Ciudad' />
        <input type="text" placeholder='Número de Teléfono' />
        <select name="" id=""><option value="">Chile</option></select>
        <select name="" id="">
            <option value="">Seleccione Región</option>
            <option value="Región">Metropolitana de Santiago</option>
            <option value="Región">Arica y Parinacota</option>
            <option value="Región">Tarapacá</option>
            <option value="Región">Antofagasta</option>
            <option value="Región">Atacama</option>
            <option value="Región">Coquimbo</option>
            <option value="Región">Valparaíso</option>
            <option value="Región">Libertador B. O'higgins</option>
            <option value="Región">Maule</option>
            <option value="Región">Ñuble</option>
            <option value="Región">BioBio</option>
            <option value="Región">Araucanía</option>
            <option value="Región">Los Ríos</option>
            <option value="Región">Los Lagos</option>
            <option value="Región">Aysen</option>
            <option value="Región">Magallanes</option>
        </select>
        <select name="" id="">
            <option value="">Seleccione Comuna</option>
            <option value="Región">Buin</option>
            <option value="Región">Calera de Tango</option>
            <option value="Región">Cerrillos</option>
            <option value="Región">Cerro Navia</option>
            <option value="Región">Colina</option>
            <option value="Región">Conchalí</option>
            <option value="Región">Curacaví</option>
            <option value="Región">El Bosque</option>
            <option value="Región">El Monte</option>
            <option value="Región">Estación Central</option>
            <option value="Región">Huechuraba</option>
            <option value="Región">Independencia</option>
            <option value="Región">Isla de Maipo</option>
            <option value="Región">La Cisterna</option>
            <option value="Región">La Florida</option>
            <option value="Región">La Granja</option>
            <option value="Región">La Pintana</option>
            <option value="Región">La Reina</option>
            <option value="Región">Lampa</option>
            <option value="Región">Las Condes</option>
            <option value="Región">Lo Barnechea</option>
            <option value="Región">Lo Espejo</option>
            <option value="Región">Lo Prado</option>
            <option value="Región">Lo Prado</option>
            <option value="Región">Macul</option>
            <option value="Región">Maipú</option>
            <option value="Región">Melipilla</option>
            <option value="Región">Ñuñoa</option>
            <option value="Región">Padre Hurtado</option>
            <option value="Región">Paine</option>
            <option value="Región">Pedro Aguirre Cerda</option>
            <option value="Región">Peñaflor</option>
            <option value="Región">Peñalolén</option>
            <option value="Región">Pirque</option>
            <option value="Región">Providencia</option>
            <option value="Región">Pudahuel</option>
            <option value="Región">Puente ALto</option>
            <option value="Región">Quilicura</option>
            <option value="Región">Quinta Normal</option>
            <option value="Región">Recoleta</option>
            <option value="Región">Renca</option>
            <option value="Región">San Bernardo</option>
            <option value="Región">San Joaquín</option>
            <option value="Región">San Miguel</option>
            <option value="Región">San Ramón</option>
            <option value="Región">Santiago Centro</option>
            <option value="Región">Talagante</option>
            <option value="Región">TilTil</option>
            <option value="Región">Vitacura</option>
        </select>
        </div>
        <button className='btnAddAddress'>Guardar dirección<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
            </svg>
        </button>
        <div className='createUserForm--inputError'><ErrorTip errorText='Debes completar toda la información'/></div> 
    </form>
  )
}

export default NewAddressInput