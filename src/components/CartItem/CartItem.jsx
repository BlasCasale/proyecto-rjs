import React from 'react'
import './CartItem.css'

const CartItem = ({item, quantity}) => {
  return (
    <div className='card--cart'>
      <p className='card--p'>{item.name}</p>
      <p className='card--p'>Cantidad: {quantity}</p>
      <p className='price'>${item.price}</p>
    </div>
  )
}

export default CartItem