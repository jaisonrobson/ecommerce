import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const useStateContext = () => useContext(Context)

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity((prevQty) => prevQty+1)
    }

    const decreaseQuantity = () => {
        setQuantity((prevQty) => {
            if (prevQty -1 < 1) return 1

            return prevQty-1
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                quantity,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </Context.Provider>
    )
}