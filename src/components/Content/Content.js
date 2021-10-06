import React, { createContext, useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import styled from 'styled-components'

import LocationsForm from '../../pages/LocationsForm/LocationsForm'
import FuelConsumptionAndPriceForm from '../../pages/FuelConsumptionAndPriceForm/FuelConsumptionAndPriceForm'
import BackAndNumberPeopleForm from '../../pages/BackAndNumberPeopleForm/BackAndNumberPeopleForm'
import Results from '../../pages/Results/Results'
import Page404 from '../../pages/Page404/Page404'

import ValidateMessage from '../ValidateMessage/ValidateMessage'

const Wrapper = styled.div`
    width: 100%;
    max-width: 900px;
    min-height: 382px;
    padding: 47px 53px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.25);
    border-radius: 3px;
`

export const ValidateMessageContext = createContext()

const Content = () => {

    const [validateMessageText, setValidateMessageText] = useState('')

    return (
        <Wrapper>
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