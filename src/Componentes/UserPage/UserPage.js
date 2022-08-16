import React from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import UserPageLinks from '../UserPageLinks/UserPageLinks';
import NewUserInput from '../NewUserInput/NewUserInput';
import Footer from '../Footer/Footer';
import './UserPage.css';


function UserPage() {

  const {mockLogin} = useContext(CartContext);

  return (
    <>
    {/* Modal edit User Info start */}
    <div class="personalDataModal modal fade" id="personalDataModal" tabindex="-1"  aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar información personal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <NewUserInput/>
            </div>
        </div>
    </div>
</div>
{/* Modal edit User Info end */}


    <div className='userPageContainer'>
      <NavBar/>
      <div className="userPageMain">

        <div className='userPageSections'>
          <UserPageLinks/>
        </div>

        <div className='userPageData'>
          <h5>Información personal</h5>
          <div className='userPersonalData'>

            <div className='userPersonalDataWrapper'>
              <div className='userPersonalDataName'>
                <h6>Nombre</h6>
                <h6>Apellido</h6>
                <h6>Rut</h6>
                <h6>Correo:</h6>
                <h6>Número de Teléfono</h6>
                <h6>Fecha de nacimiento</h6>
                <h6>Género:</h6>
              </div>

              <div className='userPersonalDataLogin'>
                <h6>{mockLogin.nombre}</h6>
                <h6>{mockLogin.apellido}</h6>
                <h6>{mockLogin.rut}</h6>
                <h6>{mockLogin.correo}</h6>
                <h6>{mockLogin.numeroTel}</h6>
                <h6>{`${mockLogin.fechaNacimiento.dia}/${mockLogin.fechaNacimiento.mes}/${mockLogin.fechaNacimiento.año}`}</h6>
                <h6>{mockLogin.genero}</h6>
              </div>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#personalDataModal" className='personalDataEditBtn'>Editar información<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>
                                
          </div>
          
        

        </div>




      </div>
      <Footer/>    
    </div>
    </>
  )
}

export default UserPage