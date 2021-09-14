import styled from 'styled-components'

const Label = styled.label`
    font-size: ${({theme}) => theme.sizes.desktop.default};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 12px;
`

export default Label