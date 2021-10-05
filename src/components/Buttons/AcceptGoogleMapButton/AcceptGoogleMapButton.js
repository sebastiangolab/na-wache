import React from 'react'
import styled from 'styled-components'
import Button from '../../../assets/styles/Button/Button'

const Wrapper = styled(Button)`
    width: 100%;
    padding: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    border-radius: 0;
`

const AcceptGoogleMapButton = props => <Wrapper {...props}>Zatwierdź</Wrapper>

export default AcceptGoogleMapButton