import React from 'react'

import { Link } from 'components'
import { urlFor } from 'lib/client'

const FooterBanner = ({
  data: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
    targetItemSlug
  } = {},
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>

          <h3>{largeText1}</h3>

          <h3>{largeText2}</h3>

          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>

          <h3>{midText}</h3>

          <p>{desc}</p>

          <Link href={`/product/${targetItemSlug}`}>
            <button type="buttton" onClick={() => {}}>{buttonText}</button>
          </Link>
        </div>

        <img
          className="footer-banner-image"
          src={urlFor(image)}
        />
      </div>
    </div>
  )
}

export default FooterBanner