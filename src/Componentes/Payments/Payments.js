import React from 'react';
import visa from '../imgs/VisaAzul.png'; 
import master from '../imgs/MasterAzul.png';
import amex from '../imgs/AmexAzul.png';
import magna from '../imgs/MagnaAzul.png';
import diners from '../imgs/DinersAzul.png';
import webpay from '../imgs/Webpay.png'
import './Payments.css';

function Payments() {
  return (

    <div className="paymentsContainer">
        <h6 className="paymentsTitle">Medios de pago</h6>
        <img className='webpayIcon' src={webpay} alt="" />
        <div className='paymentsIcons'>
            <img className='paymentsCardIcon' src={visa} alt="" />
            <img className='paymentsCardIcon' src={master} alt="" />
            <img className='paymentsCardIcon' src={amex} alt="" />
            <img className='paymentsCardIcon' src={magna} alt="" />
            <img className='paymentsCardIcon' src={diners} alt="" />
        </div>
        <div className="paymentsSecure">
            <h6 className='paymentsSecureTitle'>Transacción segura</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
            </svg>
        </div>
    </div>  

  )
}

export default Payments