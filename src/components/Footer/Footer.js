import React from 'react'

import styled from 'styled-components'
import { FaGithubAlt, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Author = styled.p`
    font-size: ${({theme}) => theme.sizes.desktop.big};
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 25px;
`

const Social = styled.a`
    margin-left: 20px;
    margin-right: 20px;
    font-size: ${({theme}) => theme.sizes.desktop.socialIcon};
    color: ${({theme}) => theme.colors.white};
    transition: color 0.3s;

    &:hover {
        color: ${({theme}) => theme.colors.gray};
    }
`

const Footer = () => (
    <Wrapper>
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