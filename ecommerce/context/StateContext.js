import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const useStateContext = () => useContext(Context)

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const onAddCartItem = (productParam, quantityParam) => {
        const isProductInCart = cartItems.find(item => item._id === productParam._id)

        setTotalPrice(prevTotalPrice => prevTotalPrice + productParam.price * quantityParam)

        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantityParam)

        if (isProductInCart) {
            const updatedCartItems = cartItems.map(cartProduct => {
                if (cartProduct._id === productParam._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantityParam
                }
            })

            setCartItems(updatedCartItems)

            toast.success(`${quantity} ${productParam.name} adicionado ao carrinho`)
        } else {
            let newProduct = productParam
            newProduct.quantity = quantity

            setCartItems([...cartItems, { ...newProduct }])
        }
    }

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
                decreaseQuantity,
                onAddCartItem,
                setShowCart
            }}
        >
            {children}
        </Context.Provider>
    )
}