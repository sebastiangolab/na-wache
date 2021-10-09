import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
    color: ${({theme}) => theme.colors.red};
    font-size: ${({theme}) => theme.sizes.desktop.validateMessage};
    font-weight: ${({theme}) => theme.fonts.regular};
    margin-bottom: 25px;
    line-height: 1.7em;
    border: 1px solid ${({theme}) => theme.colors.red};
    padding: 6px 10px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.validateMessage}
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.bigPhone.validateMessage}
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.validateMessage}
        }
    }
`

const ValidateMessage = ({ message }) => <Wrapper>{message}</Wrapper>

export default ValidateMessage