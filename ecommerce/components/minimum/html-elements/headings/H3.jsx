import React from 'react'
import styled from 'styled-components'

const StyledH3 = styled(({ style, mediaStyle, ...props }) => <h3 {...props} />)`
    ${props => props?.style ? props.style: ''}

    ${props => props.mediaStyle ? props.mediaStyle: ''}
`

const H3 = (props) => <StyledH3 {...props} />

export default H3