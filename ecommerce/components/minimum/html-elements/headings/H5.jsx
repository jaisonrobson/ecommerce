import React from 'react'
import styled from 'styled-components'

const StyledH5 = styled(({ style, mediaStyle, ...props }) => <h5 {...props} />)`
    ${props => props?.style ? props.style: ''}

    ${props => props.mediaStyle ? props.mediaStyle: ''}
`

const H5 = (props) => <StyledH5 {...props} />

export default H5