import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from './Componentes/HomePage/HomePage';
import ProductDetail from './Componentes/ProductDetail/ProductDetail';
import UserLogin from './Componentes/UserLogin/UserLogin';
import CreateUser from './Componentes/CreateUser/CreateUser';
import './App.css';



function App() {
  return (
    <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/producto/:productoId' element={<ProductDetail/>} />
            <Route path='/login' element={<UserLogin/>} /> 
            <Route path='/crear-cuenta' element={<CreateUser/>} />
            <Route path='/*' element={<Navigate to='/'/>} /> 
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
