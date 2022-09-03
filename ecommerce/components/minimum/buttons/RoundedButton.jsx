import React, { forwardRef } from 'react'
import styled from 'styled-components'

const StyledRoundedButton = styled.button`
    border-radius: 15px;
    padding: 10px 16px;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    z-index:10000 !important;
    background-color: ${props => props?.backgroundColor ? props.backgroundColor : "#f02d34" };
`

const RoundedButton = ({ children, onClick = ()=> {}, ...props }, ref) => (
    <StyledRoundedButton onClick={onClick} {...props} ref={ref}>
        {children}
    </StyledRoundedButton>
)

export default forwardRef(RoundedButton)