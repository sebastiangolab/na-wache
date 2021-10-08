import React from 'react'
import styled from 'styled-components'
import { FaCarAlt } from "react-icons/fa";

const H1 = styled.h1`
    font-size: ${({theme}) => theme.sizes.desktop.h1};
    color: ${({theme}) => theme.colors.white};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 18px;
    display: flex;
    align-items: center;
`

const HeaderIcon = styled(FaCarAlt)`
    font-size: ${({theme}) => theme.sizes.desktop.h1Icon};
    margin-right: 20px;
`

const Header = () => <H1><HeaderIcon />Kalkulator na wache</H1>

export default Header