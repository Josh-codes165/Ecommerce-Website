import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
       const existingCart = cart.find(item => item.id === product.id)

       if(existingCart){
        const updatedCart = cart.map(item => {
            if(item.id === product.id){
                return {...product, quantity: item.quantity + 1}
            }
            return item;
        })

        setCart(updatedCart)
       }
       else {
        const newItem = {...product, quantity: 1}
        setCart([...cart, newItem])
       }
    }


    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}