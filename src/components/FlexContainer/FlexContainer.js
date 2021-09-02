import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FlexContainer = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default FlexContainer