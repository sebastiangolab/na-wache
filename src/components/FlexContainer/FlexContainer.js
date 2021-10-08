import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 70px;
`

const FlexContainer = ({ children }) => <Wrapper>{children}</Wrapper>

export default FlexContainer