import React from 'react';
import './App.css';
import Footer from './Componentes/Footer/Footer';
import NavBar from './Componentes/NavBar/NavBar';
import UserLogin from './Componentes/UserLogin/UserLogin';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <UserLogin/>
      <Footer/>
    </div>
  );
}

export default App;
