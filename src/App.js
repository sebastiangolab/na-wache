import React from 'react'

import GlobalStyle from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'

import { StoreProvider } from './store/store'

const App = () => {
    return (  
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <h1>Hello Sebastian</h1>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App