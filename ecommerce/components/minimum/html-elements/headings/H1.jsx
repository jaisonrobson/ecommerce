import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled(({ style, mediaStyle, ...props }) => <h1 {...props} />)`
    ${props => props?.style ? props.style: ''}

    ${props => props.mediaStyle ? props.mediaStyle: ''}
`

const H1 = (props) => <StyledH1 {...props} />

export default H1