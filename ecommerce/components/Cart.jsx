import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'

import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { urlFor } from '../lib/client'

const Cart = () => {
  const cartRef = useRef()

  const {
    totalPrice,
    totalItemsQuantity,
    cartItems,
    onHideCart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    onRemoveCartItem,
  } = useShoppingCartContext()

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          className="cart-heading"
          type="button"
          onClick={() => onHideCart()}
        >
          <AiOutlineLeft />

          <span className="heading">Seu Carrinho</span>

          <span className="cart-num-items">({totalItemsQuantity} itens)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />

            <h3>Seu carrinho está vazio</h3>

            <Link href="/">
              <button
                className="btn"
                type="button"
                onClick={() => onHideCart()}
              >
                Continuar comprando
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map(item => (
            <div className="product" key={item._id}>
              <img
                className="cart-product-image"
                src={urlFor(item?.image[0])}
              />

              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>

                  <h4>R${item.price}</h4>
                </div>

                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                        <span
                            className="minus"
                            onClick={() => decreaseCartItemQuantity(item._id)}
                        >
                            <AiOutlineMinus />
                        </span>

                        <span
                            className="num"
                            onClick=""
                        >
                          {item.quantity}
                        </span>

                        <span
                            className="plus"
                            onClick={() => increaseCartItemQuantity(item._id)}
                        >
                            <AiOutlinePlus />
                        </span>
                    </p>
                  </div>

                  <button
                    className="remove-item"
                    type="button"
                    onClick={() => onRemoveCartItem(item._id)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>

              <h3>R${totalPrice}</h3>
            </div>

            <div className="btn-container">
              <button
                className="btn"
                type="button"
                onClick=""
              >
                Prosseguir com pagamento
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart