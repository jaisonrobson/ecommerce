import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useShoppingCartContext()

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Loja Online</Link>
      </p>

      <button
        className='cart-icon'
        type="button"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />

        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar