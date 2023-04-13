import React from 'react'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProduct, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  
  const [products, setProduct] = useState([])

  const {category} = useParams() 

  useEffect( () => {
    const functionProducts = category ? getProductsByCategory : getProduct

    functionProducts(category)
      .then(res => setProduct(res))
      .catch(err => console.error(err))
  }, [category])


  return (
    <div className='itemContainer'>

      <h2>Productos</h2>

      <ItemList products={products}/>
        
    </div>
  )
}

export default ItemListContainer