import React from 'react'
import { Toaster } from 'react-hot-toast'

import 'styles/globals.css'

import { MainLayout } from 'components'
import { ShoppingCartContext } from 'contexts/ShoppingCartContext'

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartContext>
      <MainLayout>
        <Toaster />
        
        <Component {...pageProps} />
      </MainLayout>
    </ShoppingCartContext>
  )
}

export default MyApp
