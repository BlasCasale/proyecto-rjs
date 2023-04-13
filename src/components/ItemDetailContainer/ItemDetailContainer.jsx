import React from 'react'
import { getOneProduct } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)

  const {id} = useParams()

  useEffect( () => {
    getOneProduct(id)
      .then(res => setProduct(res))
  }, [id])

  return (
    <div className='detailContainer'>
      <div className='container--h2'>
        <h2>Detalles del producto</h2>
      </div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer