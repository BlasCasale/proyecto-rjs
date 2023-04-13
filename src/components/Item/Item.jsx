import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({name, img, price, id}) => {
  return (
    <div className='card'>

        <img src={img} alt={name} className='card--img'/>

        <p className='card--p'>{name}</p>

        <p className='price'>${price}</p>
        
        <p>ID: {id}</p>

        <Link to={`/item/${id}`}>Detalles</Link>

    </div>
  )
}

export default Item