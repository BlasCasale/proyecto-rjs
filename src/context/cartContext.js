import { useState, createContext } from "react";

export const CartContext = createContext( { cart: [] } )

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    const alreadyInTheCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addToCart = (item, quantity) => {
        const poronga = cart.some(prod => prod.id === item.id)
        if (poronga) {
            console.log("Producto ya agregado.")
        } else {
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