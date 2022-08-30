import { Component, React,useState } from 'react';
import validator from 'validator'
import WelcomeEmoji from '../imgs/WelcomeUser_emoji.png';
import CompraEmoji from '../imgs/compra_emoji.png';
import VendeEmoji from '../imgs/vende_emoji.png';
    
    const useValidator = () => {

 
        const[inputEmail, setinputEmail] = useState('');
        const[validatedEmail, setvalidatedEmail] = useState(false);
        const[inputPassword, setinputPassword] = useState('');
        const[validatedPassword, setvalidatedPassword] = useState(false);
        const[welcomeUserEmoji, setWelcomeUserEmoji] = useState(WelcomeEmoji);
        const[loginData, setLoginData] = useState({});


        const[checkedTerms, setcheckedTerms] = useState(false);
        const[checkedVendedor, setcheckedVendedor] = useState(false);
        const[passwordError, setPasswordError] = useState('');
        const[inputError, setInputError] = useState('');
        const[createUserEmoji, setcreateUserEmoji] = useState(CompraEmoji);
        const[inputType, setinputType] = useState('');
        const[isVendedor, setIsVendedor] = useState('');
        
        const vendedorTitle = (title) => { return <span>{title}</span> };
    
        const validateEmail = (e) => {
            const inputEmail = e.target.value;
            const emailErrorTip = document.getElementById('emailErrorTip')
        if (validator.isEmail(inputEmail) || inputEmail === '') {
            setinputEmail(inputEmail);
            setvalidatedEmail(true);
            emailErrorTip.style.visibility= 'hidden';
        } else {
            setvalidatedEmail(false);
            emailErrorTip.style.visibility= 'visible';
        }
        }; 
    
        const validateNewPassword = (e) => {
        const inputPassword = e.target.value;
        const newPasswordErrorTip = document.getElementById('passwordErrorTip')
        if(validator.isStrongPassword(inputPassword) || inputPassword === '') {
            setinputPassword(inputPassword);
            setvalidatedPassword(true);
            newPasswordErrorTip.style.visibility= 'hidden';
        }else {
            setvalidatedPassword(false);
            newPasswordErrorTip.style.visibility= 'visible';
            }
        };

        const validatePassword = (e) => {
            
            const passwordErrorTip = document.getElementById('passwordErrorTip')
            if( inputPassword === '') {
                setvalidatedPassword(false);
                passwordErrorTip.style.visibility= 'hidden';
            }else {
                setvalidatedPassword(true);
                setinputPassword(inputPassword);
                passwordErrorTip.style.visibility= 'visible';
            }
        };
    
        const handleTermsCheckbox = () => {
        setcheckedTerms(!checkedTerms)
        };
    
        // const createCheck = (e) => {
        // e.preventDefault();
        // if((validatedEmail === true) && (validatedPassword === true) && (checkedTerms === true)) {
        //     alert(inputPassword);
        //     alert(inputEmail);
        //     alert(inputType);
        // }
        // else if ((validatedEmail === true) && (validatedPassword === true) && (checkedTerms ===! true)) {
        //     setInputError(inputErrorMesagge('Debes aceptar los Términos y Condiciones'));
        // }
        // else {
        //     setInputError(inputErrorMesagge('Debes ingresar tus datos correctamente'));
        //     }
        
        // };

        const loginCheck = () => {
           
            
            if((validatedEmail === true) && (validatedPassword === true)) {
                setLoginData({emailData: inputEmail,passwordData: inputPassword
                });
                console.log(loginData)
            }
            else {
                alert('Debes ingresar tus datos correctamente');
            }
        
        };

        const alerter = () => {
            alert('hola');
        };

        return {
            welcomeUserEmoji,
            inputEmail,
            validatedEmail,
            validateEmail,
            inputPassword,
            validatedPassword,
            validatePassword,
            loginCheck,
            alerter
        }

    
    }
    export default useValidator
