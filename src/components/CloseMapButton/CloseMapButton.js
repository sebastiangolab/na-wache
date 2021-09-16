import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    position: absolute;
    right: -5px;
    top: -5px;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.blue};
    z-index: 10;
    border: none;
    box-shadow: none;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.blueHover};
    }

    &:focus {
        outline: none;
    }
`

const CloseMapButton = props => <Wrapper {...props}>X</Wrapper>

export default CloseMapButton