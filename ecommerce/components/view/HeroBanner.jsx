import React, { useRef } from 'react'

import { urlFor } from 'lib/client'
import { RoundedButton, RoundedBanner, Link, H1, H3, P, Image } from 'components'

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
    <RoundedBanner>
      <div>
        <P style={{ fontSize: '20px' }}>{smallText}</P>

        <H3 style={{ fontSize: '4rem', marginTop: '4px' }}>{midText}</H3>

        <H1
          style={{
            color: 'white',
            fontSize: '10em',
            marginLeft: '-20px',
            textTransform: 'uppercase',
          }}
          mediaStyle={`
            @media screen and (max-width:800px) {
              font-size: 50px;
            }
          `}
        >
          {largeText1}
        </H1>
        
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
    </RoundedBanner>
  )
}

export default HeroBanner