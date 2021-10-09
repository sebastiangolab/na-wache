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

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.h1};
            background-color: ${({theme}) => theme.colors.blue};
            padding: 13px 20px;
            margin-bottom: 0;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.bigPhone.h1};
            padding: 11px 15px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.h1};
            padding: 11px 10px;
        }
    }
`

const HeaderIcon = styled(FaCarAlt)`
    font-size: ${({theme}) => theme.sizes.desktop.h1Icon};
    margin-right: 20px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.h1Icon};
            margin-right: 15px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.bigPhone.h1Icon};
            margin-right: 13px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.h1Icon};
            margin-right: 12px;
        }
    }
`

const Header = () => <H1><HeaderIcon />Kalkulator na wache</H1>

export default Header