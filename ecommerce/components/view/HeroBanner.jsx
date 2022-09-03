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
        
        <Image
          src={urlFor(image).url()}
          alt="headphones"
          style={{
            position: 'absolute',
            top: '0%',
            right: '20%',
            width: '450px',
            height: '450px',
            backgroundColor: 'blue',
          }}
          mediaStyle={`
            @media screen and (max-width:800px) {
              width: 77%;
              height: 62%;
              top: -2%;
              right: -6%;
            }
          `}
        />

        <div style={{ backgroundColor: 'red', zIndex: '1000000000 !important' }}>
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