import React from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import UserPageLinks from '../UserPageLinks/UserPageLinks';
import NewPasswordInput from '../NewPasswordInput/NewPasswordInput';
import Footer from '../Footer/Footer';
import './UserPasswordPage.css';

function UserPasswordPage() {

  const {mockLogin} = useContext(CartContext);

  return (
    <>
    <div className='userPasswordPageContainer'>
      <NavBar/>
      <div className="userPasswordPageMain">

        <div className='userPasswordPageSections'>
          <UserPageLinks/>
        </div>

        <div className='userPasswordPageData'>
          <h5>Cambiar la contraseña</h5>
          <div className='userPasswordWrapper'>
            <NewPasswordInput/>         
          </div>
        </div>
      </div>
      <Footer/>    
    </div>
    </>
  )
}

export default UserPasswordPage