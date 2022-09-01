import React from 'react'
import Head from 'next/head'

import { Navbar, Footer } from 'components'

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Loja Online</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className='main-container'>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout