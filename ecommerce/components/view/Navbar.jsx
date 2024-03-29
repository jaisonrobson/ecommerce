import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart, Link } from 'components'
import { useShoppingCartContext } from 'contexts/ShoppingCartContext'

const Navbar = () => {
  const { showCart, onShowCart, totalItemsQuantity } = useShoppingCartContext()

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Loja Online</Link>
      </p>

      <button
        className='cart-icon'
        type="button"
        onClick={() => onShowCart()}
      >
        <AiOutlineShopping />

        <span className='cart-item-qty'>{totalItemsQuantity}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar