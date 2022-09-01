import React, { useRef } from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
import { RoundedButton } from './Buttons'

const HeroBanner = ({
  data: {
    smallText,
    midText,
    largeText1,
    image,
    product,
    buttonText,
    desc,
    targetItemSlug
  } = {},
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>

        <h3>{midText}</h3>

        <h1>{largeText1}</h1>
        
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${targetItemSlug}`}>
            <RoundedButton
              onClick={() => {}}
            >
              {buttonText}
            </RoundedButton>
          </Link>

          <div className="desc">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner