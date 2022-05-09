import React from 'react'
import { NavLink } from 'react-router-dom'

function UserControls() {
  return (
    <>
      <div className='userControls--Sesion'><NavLink to='/login'>Iniciar sesión</NavLink></div>
      <div className='userControls--Resgistrarse'><NavLink to='/crear-cuenta'>Crear cuenta</NavLink></div>
    </>
     
  )
}

export default UserControls