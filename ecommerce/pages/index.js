import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>Produtos mais vendidos</h2>
        <p>Alto-falantes mais variados</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product2'].map(
            (product) => product
        )}
      </div>

      Footer
    </>
  )
}

export default Home