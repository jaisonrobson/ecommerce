import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
    padding: 100px 40px;
    background-color: ${props => props?.backgroundColor ? props.backgroundColor : '#dcdcdc'};
    border-radius: 15px;
    position: relative;
    height: ${props => props?.height ? props.height : '500px'};
    line-height: ${props => props?.lineHeight ? props.lineHeight : '0.9'};
    width: 100%;
    ${props => props?.color ? `color: ${props.color};` : ''}
    ${props => props?.marginTop ? `margin-top: ${props.marginTop};` : ''}

    @media screen and (max-width:800px) {
        height: ${props => props?.mobileHeight ? props.mobileHeight : '560px'};
        line-height: ${props => props?.lineHeight ? props.lineHeight : '1.3'};
    }
`


const RoundedBanner = ({ children, ...props }) => {
  return (
    <BannerContainer {...props}>
        {children}
    </BannerContainer>
  )
}

export default RoundedBanner