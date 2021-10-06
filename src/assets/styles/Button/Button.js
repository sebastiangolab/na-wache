import styled from 'styled-components'

const Button = styled.button`
    width: 260px;
    padding: 25px 13px;
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    font-family: ${({theme}) => theme.fontFamily.montserrat};
    line-height: 1;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.blue};
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.colors.blueHover};
    }
`

export default Button