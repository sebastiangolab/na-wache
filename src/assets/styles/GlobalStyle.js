import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`    
    *,
    *:before,
    *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: ${({theme}) => theme.fontFamily.montserrat};
        background-color: ${({theme}) => theme.colors.blue};
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        body {
            background-color: ${({theme}) => theme.colors.white};
        }
    }
`

export default GlobalStyle