import React from 'react'
import '../styles/navbar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#quienes somos">Quienes Somos</a></li>
        <CartWidget/>
    </ul>
    )
}

export default NavBar