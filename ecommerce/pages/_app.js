import React from 'react'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.css'

import { Layout } from '../components'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartContext>
      <Layout>
        <Toaster />
        
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartContext>
  )
}

export default MyApp
