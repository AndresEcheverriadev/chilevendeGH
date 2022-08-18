import React from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import UserPageLinks from '../UserPageLinks/UserPageLinks';
import NewAddressInput from '../NewAddressInput/NewAddressInput';
import Footer from '../Footer/Footer';
import './UserAddressPage.css';

function UserAddressPage() {

  const {mockLogin} = useContext(CartContext);

  return (
    <>
    {/* Modal edit Address User Page start */}
    <div class="addressUserPageModal modal fade" id="addressUserPageModal" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Nueva dirección de envío</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <NewAddressInput/>
              </div>
          </div>
      </div>
  </div>
  {/* Modal edit Address end */}

  {/* Modal edit Billing User Page start */}
  <div class="billingUserPageModal modal fade" id="billingUserPageModal" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nueva dirección de facturación</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <NewAddressInput/>  
          </div>
      </div>
  </div>
</div>
{/* Modal edit Billing end */}

    <div className='userAddressPageContainer'>
      <NavBar/>
      <div className="userAddressPageMain">

        <div className='userAddressPageSections'>
          <UserPageLinks/>
        </div>
        <div className='userAddressPageData'>

          <div className='userPageAddressLoginData'>
              <h5>Dirección de envío</h5>
              <div className='loginUserPageDataAddress'>
                <h6>{mockLogin.calle}</h6>
                <h6>{mockLogin.ciudad}</h6>
                <h6>{mockLogin.numeroTel}</h6>
                <h6>{mockLogin.pais}</h6>
                <h6>{mockLogin.region}</h6>
                <h6>{mockLogin.comuna}</h6>
                <button data-bs-toggle="modal" data-bs-target="#addressUserPageModal" className='userPageAddressEditBtn'>Editar dirección<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </button>
              </div>
        </div>
        <div className="spacerL"></div>

        <div className='userPageBillingLoginData'>
          <h5>Dirección de facturación</h5>
          <div className='userPageBillingCheckContainer'>
            <input class="userPageBillingCheck" type="checkbox" value=""></input>
            <label>La misma que la dirección de envío</label>
          </div>
          <div className='billingUserPageLoginDataAddress'>
            <h6>{mockLogin.calle}</h6>
            <h6>{mockLogin.ciudad}</h6>
            <h6>{mockLogin.numeroTel}</h6>
            <h6>{mockLogin.pais}</h6>
            <h6>{mockLogin.region}</h6>
            <h6>{mockLogin.comuna}</h6>
            <button data-bs-toggle="modal" data-bs-target="#billingUserPageModal" className='userPageBillingAddressEditBtn'>Editar dirección<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
            </button>
          </div>
        </div>
         
        </div>
      </div>
      <Footer/>    
    </div>
    </>
  )
}

export default UserAddressPage