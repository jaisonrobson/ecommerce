import React from 'react'

import { client } from '../lib/client'

import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ data: { products, banner } = {} }) => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Produtos mais vendidos</h2>
        <p>Alto-falantes mais variados</p>
      </div>

      <div className="products-container">
        {products?.map(
            (product) => product.name
        )}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const products = await client.fetch('*[_type == "product"]')
  const banner = await client.fetch('*[_type == "banner"]')

  return {
    props: { data: { products, banner } },
  }
}

export default Home