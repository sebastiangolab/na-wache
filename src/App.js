import React from 'react'
import { StoreProvider } from './store/store'

const App = () => {
    return (
        <StoreProvider>
            <h1>Hello Sebastian</h1>
        </StoreProvider>
    )
}

export default App