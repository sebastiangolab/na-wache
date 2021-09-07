import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    max-width: 900px;
    height: 382px;
    padding: 47px 53px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.25);
`

const Content = () => (
    <Wrapper>
        <Router>
            <Switch>
                <Route exact path='/' component={() => (<h1>Step 1</h1>)} />
                <Route exact path='/fuel-consumption-and-price' component={() => (<h1>Step 2</h1>)} />
                <Route exact path='/back-and-number-people' component={() => (<h1>Step 3</h1>)} />
                <Route exact path='/results' component={() => (<h1>Step 4</h1>)} />
                <Route component={() => (<h1>404</h1>)} />
            </Switch>
        </Router>
    </Wrapper>
)

export default Content