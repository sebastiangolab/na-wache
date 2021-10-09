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
    max-width: 992px;
    padding: 75px 65px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            min-height: calc(100vh - 127px);
            padding: 40px 20px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            min-height: calc(100vh - 110px);
            padding: 30px 15px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            min-height: calc(100vh - 130px);
            padding: 30px 10px;
        }
    }
`

const H2 = styled.h2`
    font-size: ${({theme}) => theme.sizes.desktop.h2};
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 35px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.h2};
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            margin-bottom: 30px;
            font-size: ${({theme}) => theme.sizes.bigPhone.h2};
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.h2};
        }
    }
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