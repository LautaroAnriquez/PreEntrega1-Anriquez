import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
        <img src={cart} alt="carrito" style={{width: 40}}/>
        <span style={{color: 'black', fontWeight: 'bold'}}> (4) </span>
    </>
    
  )
}

export default CartWidget