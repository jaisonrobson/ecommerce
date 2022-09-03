import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled(({ style, mediaStyle, ...props }) => <h2 {...props} />)`
    ${props => props?.style ? props.style: ''}

    ${props => props.mediaStyle ? props.mediaStyle: ''}
`

const H2 = (props) => <StyledH2 {...props} />

export default H2