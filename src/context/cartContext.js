import { useState, createContext } from "react";

export const CartContext = createContext( { cart: [] } )

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    const alreadyInTheCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addToCart = (item, quantity) => {
        if (!alreadyInTheCart(item.id)) {
            setCart([ ...cart, {item, quantity} ])
        }
    }

    const deleteItemOfCart = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id)

        setCart(updatedCart)
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={ {cart, addToCart, alreadyInTheCart, deleteItemOfCart, emptyCart} }>
            {children}
        </CartContext.Provider>
    )

}