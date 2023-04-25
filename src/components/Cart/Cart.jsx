import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
    const {cart, emptyCart} = useContext(CartContext)

    // calculamos la cantidad total de productos en el carrito

    const totalCart = cart.reduce((total, product) => total + product.quantity, 0)

    // calculamos el precio total de los productos en el carrito

    const totalAmount = cart.reduce((total, product) => total + (product.item.price * product.quantity), 0)

    if (totalCart === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Productos</Link>
            </>
        )
    }

    return (
        <div className='cart--container'>
            {
                cart.map(product => <CartItem key={product.item.id} {...product} />)
            }
            <h3>Total: ${totalAmount}</h3>
            <button onClick={() => emptyCart()} className='empty--cart'>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart