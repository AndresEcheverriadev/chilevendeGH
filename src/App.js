import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from './Componentes/HomePage/HomePage';
import UserLogin from './Componentes/UserLogin/UserLogin';
import './App.css';



function App() {
  return (
    <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<UserLogin/>} /> 
            <Route path='/*' element={<Navigate to='/'/>} /> 
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
