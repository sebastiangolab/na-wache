import React from 'react'
import { StoreProvider } from './store/store'

import GlobalStyle from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'

import Header from './components/Header/Header'
import FlexContainer from './components/FlexContainer/FlexContainer'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

const App = () => {
    return (  
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Footer />
            <FlexContainer>
                <Header />
                <StoreProvider>
                    <Content />
                </StoreProvider>
            </FlexContainer>
        </ThemeProvider>
        
    )
}

export default App