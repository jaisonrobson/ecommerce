import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const useStateContext = () => useContext(Context)

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [quantity, setQuantity] = useState(1)

    let foundProductToUpdate
    let productToUpdateIndex

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

    const increaseCartItemQuantity = (id) => {
        foundProductToUpdate = cartItems.find(item => item._id === id)
        productToUpdateIndex = cartItems.findIndex(product => product._id === id)

        const newCartItems = cartItems.filter(item => item._id !== id)

        setCartItems([
            ...newCartItems,
            {
                ...foundProductToUpdate,
                quantity: foundProductToUpdate.quantity + 1
            }
        ])

        setTotalPrice(prevTotalPrice => prevTotalPrice + foundProductToUpdate.price)

        setTotalQuantities(prevTotalQty => prevTotalQty + 1)
    }

    const decreaseCartItemQuantity = (id) => {
        foundProductToUpdate = cartItems.find(item => item._id === id)
        productToUpdateIndex = cartItems.findIndex(product => product._id === id)

        if (foundProductToUpdate.quantity <= 1) return

        const newCartItems = cartItems.filter(item => item._id !== id)

        setCartItems([
            ...newCartItems,
            {
                ...foundProductToUpdate,
                quantity: foundProductToUpdate.quantity - 1
            }
        ])

        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProductToUpdate.price)

        setTotalQuantities(prevTotalQty => prevTotalQty - 1)
    }

    const onRemoveCartItem = (product) => {
        foundProductToUpdate = cartItems.find(item => item._id === product._id)
        const newCartItems = cartItems.filter(item => item._id !== product._id)        

        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProductToUpdate.price * foundProductToUpdate.quantity)

        setTotalQuantities(prevTotalQty => prevTotalQty - foundProductToUpdate.quantity)

        setCartItems(newCartItems)
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
                setShowCart,
                increaseCartItemQuantity,
                decreaseCartItemQuantity,
                onRemoveCartItem
            }}
        >
            {children}
        </Context.Provider>
    )
}