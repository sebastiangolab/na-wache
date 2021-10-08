import React from 'react'
import styled from 'styled-components'
import { FaGithubAlt, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: right;
    margin-right: 30px;
    margin-left: 30px;
`

const Author = styled.p`
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    color: ${({theme}) => theme.colors.white};
    padding-bottom: 6px;
    margin-right: 20px;
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