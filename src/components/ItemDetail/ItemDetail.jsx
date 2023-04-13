import React from 'react'
import './ItemDetail.css'
import { useState } from 'react'

const ItemDetail = ({name, price, img}) => {
  const stock = 10
  const initial = 1
  const [amount, setAmount] = useState(initial)

  const addCounter = () => {
      if (amount < stock){
          setAmount(amount +1)
      }
  }
  const subtractCounter = () => {
      if (amount > initial){
          setAmount(amount -1)
      }
  }


  return (
    <div className='card'>

      <p className='card--p'>{name}</p>

      <p className='price'>${price}</p>

      <img src={img} alt={name} className='card--img'/>

      <div className='card__btn'>

        <button className='card--btn' onClick={subtractCounter}>-</button>

        <strong>{amount}</strong>

        <button className='card--btn' onClick={addCounter}>+</button>

      </div>
        
    </div>
  )
}

export default ItemDetail