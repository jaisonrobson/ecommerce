import React, { useState, useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'

const ProductDetails = ({
    data: {
        selectedProduct,
        products,
    } = {},
}) => {
    const {
        image,
        name,
        details,
        price
    } = selectedProduct

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => setQuantity(prev => prev + 1)

    const decreaseQuantity = () => setQuantity(prev => (prev-1 < 1) ? prev : prev - 1)

    const resetQuantity = () => setQuantity(1)
    
    const { onAddCartItem } = useShoppingCartContext()

    useEffect(() => {
        resetQuantity()
    }, [selectedProduct._id])

    return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img
                        className="product-detail-image"
                        src={urlFor(image && image[selectedImageIndex])}
                        key="bigImage"
                    />
                </div>

                <div className="small-images-container">
                    {image?.map((item, index) => (
                        <img
                            className={
                                index === selectedImageIndex
                                    ? "small-image selected-image"
                                    : "small-image"
                            }
                            src={urlFor(item)}
                            onMouseEnter={() => setSelectedImageIndex(index)}
                            key={item._key}
                        />
                    ))}
                </div>
            </div>

            <div className="product-detail-desc">
                <h1>{name}</h1>
                
                <div className="reviews">
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>

                    <p>(20)</p>
                </div>

                <h4>Detalhes: </h4>

                <p>{details}</p>

                <p className="price">R${price}</p>

                <div className="quantity">
                    <h3>Quantidade:</h3>

                    <p className="quantity-desc">
                        <span
                            className="minus"
                            onClick={decreaseQuantity}
                        >
                            <AiOutlineMinus />
                        </span>

                        <span
                            className="num"
                        >
                            {quantity}
                        </span>

                        <span
                            className="plus"
                            onClick={increaseQuantity}
                        >
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>

                <div className="buttons">
                    <button
                        className="add-to-cart"
                        type="button"
                        onClick={() => onAddCartItem(selectedProduct._id, quantity)}
                    >
                        Adicionar ao carrinho
                    </button>

                    <button
                        className="buy-now"
                        type="button"
                        onClick=""
                    >
                        Comprar agora
                    </button>
                </div>
            </div>
        </div>

        <div className="maylike-products-wrapper">
            <h2>Itens relacionados</h2>
            
            <div className="marquee">
                <div className="maylike-products-container track">
                    {products.map((product) => (
                        <Product key={product._id} data={product} />
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export const getStaticPaths = async () => {
    const productsPathNames = await client.fetch(
        `*[_type == "product"] {
            slug {
                current
            }
        }`
    )

    const paths = productsPathNames.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({
    params: {
        slug,
    } = {}
}) => {
    const selectedProduct = await client.fetch(
        `*[_type == "product" && slug.current == "${slug}"][0]`
    )

    const products = await client.fetch(`*[_type == "product"]`)
  
    return {
      props: { data: { products, selectedProduct } },
    }
  }

export default ProductDetails