import React from 'react'

import { client } from 'lib/client'

import { Product, FooterBanner, HeroBanner } from 'components'

const Home = ({ data: { products, banner } = {} }) => {
  return (
    <>
      <HeroBanner data={banner.length && banner[0]} />

      <div className="products-heading">
        <h2>Produtos mais vendidos</h2>
        <p>Alto-falantes mais variados</p>
      </div>

      <div className="products-container">
        {products?.map(
            (product) => <Product key={product._id} data={product} />
        )}
      </div>

      <FooterBanner data={banner.length && banner[0] } />
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