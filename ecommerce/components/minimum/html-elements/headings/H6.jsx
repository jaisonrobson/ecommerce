import React from 'react'
import styled from 'styled-components'

const StyledH6 = styled(({ style, mediaStyle, ...props }) => <h6 {...props} />)`
    ${props => props?.style ? props.style: ''}

    ${props => props.mediaStyle ? props.mediaStyle: ''}
`

const H6 = (props) => <StyledH6 {...props} />

export default H6