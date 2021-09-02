import React from 'react'

import styled from 'styled-components'

const H1 = styled.h1`
    font-size: ${({theme}) => theme.sizes.desktop.h1};
    color: ${({theme}) => theme.colors.white};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 15px;
`

const H2 = styled.h2`
    font-size: ${({theme}) => theme.sizes.desktop.big};
    color: ${({theme}) => theme.colors.white};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 60px;
`

const Header = () => (
    <>
        <H1>Kalkulator na wache</H1>
        <H2>Oblicz po ile składka na paliwo</H2>
    </>
)

export default Header