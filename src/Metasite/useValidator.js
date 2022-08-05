import { React,useState } from 'react';
import validator from 'validator'
import CompraEmoji from './compra_emoji.png'
import VendeEmoji from './vende_emoji.png'
    
    const useValidator = () => {

        const[inputPassword, setinputPassword] = useState('');
        const[validatedPassword, setvalidatedPassword] = useState(false);
        const[inputEmail, setinputEmail] = useState('');
        const[validatedEmail, setvalidatedEmail] = useState(false);
        const[checkedTerms, setcheckedTerms] = useState(false);
        const[checkedVendedor, setcheckedVendedor] = useState(false);
        const[emailError, setEmailError] = useState('');
        const[passwordError, setPasswordError] = useState('');
        const[inputError, setInputError] = useState('');
        const[createUserEmoji, setcreateUserEmoji] = useState(CompraEmoji);
        const[inputType, setinputType] = useState('');
        const[isVendedor, setIsVendedor] = useState('');
        
        const vendedorTitle = (title) => { return <span>{title}</span> };
    
        const emailErrorMesagge = () => { return <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg> Escribe una dirección de correo válida </span>};
        
        const inputErrorMesagge = (textError) => { return  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg> {textError} </span> };
    
        const passwordErrorMesagge = () => { return <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg> La contraseña debe tener al menos una letra, un número, un símbolo y una longitud de 8 caracteres</span> };
    
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
        if(validator.isStrongPassword(inputPassword)) {
            setPasswordError('');
            setinputPassword(inputPassword);
            setvalidatedPassword(true);
        }else {
            setPasswordError(passwordErrorMesagge);
            setvalidatedPassword(false);
            }
        };
    
        const handleTermsCheckbox = () => {
        setcheckedTerms(!checkedTerms)
        };
    
        const createCheck = (e) => {
        e.preventDefault();
        if((validatedEmail === true) && (validatedPassword === true) && (checkedTerms === true)) {
            alert(inputPassword);
            alert(inputEmail);
            alert(inputType);
        }
        else if ((validatedEmail === true) && (validatedPassword === true) && (checkedTerms ===! true)) {
            setInputError(inputErrorMesagge('Debes aceptar los Términos y Condiciones'));
        }
        else {
            setInputError(inputErrorMesagge('Debes ingresar tus datos correctamente'));
            }
        
        };

        const iconVendeEmoji = () => {
            return {VendeEmoji}
        };

        const iconCompraEmoji = () => {
            return {CompraEmoji}
        }

        return {
            inputPassword,
            validatedPassword,
            inputEmail,
            validatedEmail,
            checkedTerms,
            checkedVendedor,
            emailError,
            passwordError,
            inputError,
            createUserEmoji,
            inputType,
            isVendedor,
            setinputPassword,
            setvalidatedPassword,
            setinputEmail,
            setvalidatedEmail,
            setcheckedTerms,
            setcheckedVendedor,
            setEmailError,
            setPasswordError,
            setInputError,
            setcreateUserEmoji,
            setinputType,
            setIsVendedor,
            vendedorTitle,
            emailErrorMesagge,
            inputErrorMesagge,
            passwordErrorMesagge,
            validateEmail,
            validatePassword,
            handleTermsCheckbox,
            createCheck,
            iconVendeEmoji,
            iconCompraEmoji
        }

    }
    
    export default useValidator
