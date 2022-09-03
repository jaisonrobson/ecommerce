import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled(({ style = '', mediaStyle = '', ...props }) => <p {...props} />)`
    ${props => props.style}

    ${props => props.mediaStyle}
`

const P = props => <StyledParagraph {...props} />

export default P