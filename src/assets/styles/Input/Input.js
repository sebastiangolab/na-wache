import styled from 'styled-components'

const Input = styled.input`
    font-family: ${({theme}) => theme.fontFamily.montserrat};
    font-size: ${({theme}) => theme.sizes.desktop.default};
    border: 1px solid ${({theme}) => theme.colors.gray};
    padding: 14px 12px;
    transition: border 0.3s;
    margin-bottom: 35px;
    border-radius: 3px;

    &:focus {
        outline: none;
        border: 1px solid ${({theme}) => theme.colors.blue};
    }
`

export default Input