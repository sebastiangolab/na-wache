import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LocationsForm from '../../pages/LocationsForm/LocationsForm'
import FuelConsumptionAndPriceForm from '../../pages/FuelConsumptionAndPriceForm/FuelConsumptionAndPriceForm'
import BackAndNumberPeopleForm from '../../pages/BackAndNumberPeopleForm/BackAndNumberPeopleForm'
import Results from '../../pages/Results/Results'
import Page404 from '../../pages/Page404/Page404'

import { AppContext } from '../../store/store';

import ValidateMessage from '../ValidateMessage/ValidateMessage'

const Wrapper = styled.div`
    width: 100%;
    max-width: 1027px;
    padding: 75px 65px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 3px;
`

const H2 = styled.h2`
    font-size: ${({theme}) => theme.sizes.desktop.h2};
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 35px;
`

export const ValidateMessageContext = createContext()

const Content = () => {

    const { path } = useContext(AppContext)
    const [validateMessageText, setValidateMessageText] = useState('')

    const isDisplayH2 = () => {
        if (path === '/' || path === '/fuel-consumption-and-price' || path === '/back-and-number-people') {
            return true
        } else {
            return false
        }
    }

    return (
        <Wrapper>
            {isDisplayH2() &&
                <H2>Oblicz po ile składka na paliwo</H2>
            }
            {validateMessageText !== '' && <ValidateMessage message={validateMessageText} />}
            <ValidateMessageContext.Provider value={{
                validateMessageText,
                setValidateMessageText,
            }}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={LocationsForm} />
                        <Route exact path='/fuel-consumption-and-price' component={FuelConsumptionAndPriceForm} />
                        <Route exact path='/back-and-number-people' component={BackAndNumberPeopleForm} />
                        <Route exact path='/results' component={Results} />
                        <Route component={Page404} />
                    </Switch>
                </Router>
            </ValidateMessageContext.Provider>
        </Wrapper>
    )
}

export default Content