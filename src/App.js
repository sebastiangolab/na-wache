import React from 'react'
import { StoreProvider } from './store/store'

import styled from 'styled-components'
import GlobalStyle from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'

import Header from './components/Header/Header'
import FlexContainer from './components/FlexContainer/FlexContainer'
import Footer from './components/Footer/Footer'

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
                    <FlexContainer>
                        <h1>Content</h1>
                        {/* <Content /> */}
                        <Footer />
                    </FlexContainer>
                </AppWrapper>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App