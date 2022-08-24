import React, { createContext, useContext, useState, useEffect } from 'react'
import _ from 'lodash'
import { toast } from 'react-hot-toast'

import { client } from '../lib/client'

const Context = createContext()

export const useShoppingCartContext = () => useContext(Context)

export const ShoppingCartContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItemsQuantity, setTotalItemsQuantity] = useState(0)

    useEffect(() => {
      calculateCart()
    }, [cartItems])
    
    /* INTERNAL METHODS */

    const calculateCart = () => {
        calculateCartTotalPrice()
        calculateCartTotalItemsQuantity()
    }

    const calculateCartTotalPrice = () =>
        setTotalPrice(
            _.reduce(
                cartItems,
                (result, item) => result += item.price * item.quantity,
                0
            )
        )

    const calculateCartTotalItemsQuantity = () =>
        setTotalItemsQuantity(
            _.reduce(
                cartItems,
                (result, item) => result += item.quantity,
                0
            )
        )

    const onChangeCartItemQuantity = async (productId, quantity) => {
        const product = await client.fetch(`*[_type == "product" && _id == "${productId}"]`)
        
        const cartItemSearch = _.find(cartItems, (item) => item._id == productId)

        if (cartItemSearch) {
            const newCartItems = _.map(cartItems, (item) => {
                if (item._id == productId) {
                    const newQuantity = item.quantity + quantity

                    return {
                        ...item,
                        quantity: newQuantity > 0 ? newQuantity : 1
                    }
                }

                return item
            })

            setCartItems(newCartItems)
        }
        else if (quantity > 0) {
            const newCartItem = {
                ...product[0],
                quantity,
            }

            setCartItems((prevItems) => [...prevItems, newCartItem])
        }
    }

    /* EXTERNAL METHODS */

    const increaseCartItemQuantity = (productId) => onChangeCartItemQuantity(productId, 1)

    const decreaseCartItemQuantity = (productId) => onChangeCartItemQuantity(productId, -1)

    const onAddCartItem = (productId, quantity) => onChangeCartItemQuantity(productId, quantity)

    const onRemoveCartItem = (productId) => {
        const newCartItems = _.filter(cartItems, item => item._id != productId)

        setCartItems(newCartItems)
    }

    const onShowCart = () => setShowCart(true)

    const onHideCart = () => setShowCart(false)

    return (
        <Context.Provider
            value={{
                showCart,
                onShowCart,
                onHideCart,                
                cartItems,
                onAddCartItem,
                onRemoveCartItem,
                increaseCartItemQuantity,
                decreaseCartItemQuantity,
                totalPrice,
                totalItemsQuantity,
            }}
        >
            {children}
        </Context.Provider>
    )
}