import React from 'react'
import styled from 'styled-components'

const StyledH4 = styled(({ style, mediaStyle, ...props }) => <h4 {...props} />)`
    ${props => props?.style ? props.style: ''}

    ${props => props.mediaStyle ? props.mediaStyle: ''}
`

const H4 = (props) => <StyledH4 {...props} />

export default H4