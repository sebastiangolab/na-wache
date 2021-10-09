import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 35px;
    margin-top: 70px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            position: relative;
            margin-top: 0;
            margin-bottom: 0;
            padding-bottom: 46px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            padding-bottom: 71px;
        }
    }
`

const FlexContainer = ({ children }) => <Wrapper>{children}</Wrapper>

export default FlexContainer