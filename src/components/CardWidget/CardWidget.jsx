import React from 'react'
import './CardWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const CardWidget = () => {
  const {cart} = useContext(CartContext)

  const totalCart = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <div className='carrito'>

      <Link to='/cart'>
      <img src="../img/carrito.png" alt="Carrito" className='imgCarrito'/>
      </Link>
      
      {totalCart}

    </div>
)}

export default CardWidget