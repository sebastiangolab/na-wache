import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
    color: ${({theme}) => theme.colors.red};
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    font-weight: ${({theme}) => theme.fonts.regular};
    margin-bottom: 25px;
`

const ValidateMessage = ({ message }) => <Wrapper>{message}</Wrapper>

export default ValidateMessage