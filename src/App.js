import React from 'react'
import { StoreProvider } from './store/store'

import styled from 'styled-components'
import GlobalStyle from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'

import Header from './components/Header/Header'

const AppWrapper = styled.div`
    padding: 18vh 9vw 0 9vw;
`

const App = () => {
    return (  
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppWrapper>
                    <Header />
                    {/* <Container> */}
                        {/* <Content /> */}
                        {/* <Footer /> */}
                    {/* </Container> */}
                </AppWrapper>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App