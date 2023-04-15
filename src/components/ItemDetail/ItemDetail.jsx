import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({name, price, img, stock}) => {
  const [addQuantity, setAddQuantity] = useState(0) 

  const handlerQuantity = (quantity) => {
    setAddQuantity(quantity)
  }

  return (
    <div className='card'>

      <p className='card--p'>{name}</p>

      <p className='price'>${price}</p>

      <img src={img} alt={name} className='card--img'/>
      
      {
        addQuantity > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<ItemCount initial={1} stock={stock} addFunction={handlerQuantity}/>)
      }  
      
    </div>
  )
}

export default ItemDetail