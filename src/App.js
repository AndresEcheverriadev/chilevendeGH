import React from 'react';
import { useContext } from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { CartContext } from '../src/Componentes/CartContext/CartContext';
import HomePage from './Componentes/HomePage/HomePage';
import ProductDetail from './Componentes/ProductDetail/ProductDetail';
import ProductsCategory from './Componentes/ProductsCategory/ProductsCategory';
import CartPage from './Componentes/CartPage/CartPage';
import CartContextProvider from './Componentes/CartContext/CartContext';
import CheckoutPage from './Componentes/CheckoutPage/CheckoutPage';
import ReadyBuyPage from './Componentes/ReadyBuyPage/ReadyBuyPage';
import UserLogin from './Componentes/UserLogin/UserLogin';
import CreateUser from './Componentes/CreateUser/CreateUser';
import UserPage from './Componentes/UserPage/UserPage';
import UserPasswordPage from './Componentes/UserPasswordPage/UserPasswordPage';
import './App.css';


function App() {

  const {isLogged} = useContext(CartContext);

  return (

    <BrowserRouter>
        <CartContextProvider>
          <div className='App'>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/:productoCategory/:productoName' element={<ProductDetail/>} />
              <Route path='/:productoCategory' element={<ProductsCategory/>} />
              <Route path='/:productoSubCategory' element={<ProductsCategory/>} />
              <Route path='/carrito' element={<CartPage/>} />
              <Route path='/checkout' element={<CheckoutPage/>} />
              <Route path='/ready' element={<ReadyBuyPage/>} />
              <Route path='/login' element={<UserLogin/>} /> 
              <Route path='/crear-cuenta' element={<CreateUser/>} />
              <Route path='/usuario' element={<UserPage/>} />
              <Route path='/usuario/password' element={<UserPasswordPage/>} />
              <Route path='/*' element={<Navigate to='/'/>} /> 
            </Routes>
          </div>
        </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
