import React from 'react'
import styled from 'styled-components'
import { FaGithubAlt, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Wrapper = styled.div`
    display: ${props => !props.mobileDisplay ? 'flex' : 'none'};
    align-items: center;
    padding-top: 15px;
    justify-content: right;
    padding-right: 20px;
    padding-left: 20px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            display: ${props => props.mobileDisplay ? 'flex' : 'none'};
            justify-content: flex-start;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 15px;
            padding-bottom: 7px;
            background-color: ${({theme}) => theme.colors.blue};
            position: absolute;
            width: 100%;
            bottom: 0;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
           flex-direction: column;
        }
    }
`

const Author = styled.p`
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    color: ${({theme}) => theme.colors.white};
    padding-bottom: 9px;
    margin-right: 20px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.footer};
            margin-right: 10px;
            padding-bottom: 5px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            margin-right: 0;
            margin-bottom: 5px;
         }
    }
`

const Social = styled.a`
    margin-left: 12px;
    margin-right: 12px;
    font-size: ${({theme}) => theme.sizes.desktop.socialIcon};
    color: ${({theme}) => theme.colors.white};
    transition: color 0.3s;

    &:hover {
        color: ${({theme}) => theme.colors.gray};
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.socialIcon};
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            margin-left: 12px;
            margin-right: 12px;
         }
    }
`

const Footer = ({ mobileDisplay }) => (
    <Wrapper mobileDisplay={mobileDisplay}>
        <Author>Autor: Sebastian Gołąb</Author>
        <div>
            <Social href="https://github.com/sebastiangolab" target="_blank">
                <FaGithubAlt />
            </Social>
            <Social href="https://www.linkedin.com/in/sebastian-go%C5%82%C4%85b/" target="_blank">
                <FaLinkedinIn />
            </Social>
            <Social href="https://www.facebook.com/golomp1997/" target="_blank">
                <FaFacebookF />
            </Social>
            <Social href="https://www.instagram.com/seebastiangolab/" target="_blank">
                <FaInstagram />
            </Social>
        </div>
    </Wrapper>
)

export default Footer