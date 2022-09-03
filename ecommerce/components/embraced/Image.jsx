import React from 'react'
import NextImage from 'next/image'
import styled from 'styled-components'

const StyledDivContainer = styled(({ style='', mediaStyle='', ...props }) => <div {...props} />)`
    ${props => props.style}

    ${props => props.mediaStyle}
`

const Image = ({ src, ...props }) => (
    <StyledDivContainer {...props}>
        <NextImage
            layout='fill'
            src={src}
        />
    </StyledDivContainer>
)

export default Image