import React, { useContext, useLayoutEffect } from 'react'
import { useLocation, useHistory } from 'react-router'
import styled from 'styled-components'

import { AppContext } from '../../store/store'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const ResultWrapper = styled.div`
    margin-bottom: 50px;
`

const ResultTitle = styled.h2`
    font-size: ${({theme}) => theme.sizes.desktop.resultTitle};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 12px;
`

const ResultValue = styled.p`
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({theme}) => theme.sizes.desktop.resultValue};
    font-weight: ${({theme}) => theme.fonts.bold};
`

const Results = () => {

    const { setPath, formValues } = useContext(AppContext)

    const history = useHistory()
    const location = useLocation()

    useLayoutEffect(
        () => {

            if (
                formValues.distance <= 0
                || formValues.fuelConsumption !== ''
                || formValues.fuelPrice !== ''
                || formValues.numberPeople !== '' 
            ) history.push('/')

            setPath(location.pathname)
        }, []
    )

    const {
        distance,
        fuelConsumption,
        fuelPrice,
        numberPeople,
        isWayBack,
    } = formValues

    const finalDistance = distance * isWayBack.value
    const priceForTravel = (fuelConsumption / 100) * distance * fuelPrice * isWayBack.value
    const priceForPerson = priceForTravel / numberPeople

    return (
        <Wrapper>
            <ResultWrapper>
                <ResultTitle>Całkowity dystans wynosi:</ResultTitle>
                <ResultValue>{finalDistance.toFixed(2)} km</ResultValue>
            </ResultWrapper>

            <ResultWrapper>
                <ResultTitle>Cała podróż będzie kosztować:</ResultTitle>
                <ResultValue>{priceForTravel.toFixed(2)} zł</ResultValue>
            </ResultWrapper>

            <ResultWrapper>
                <ResultTitle>Koszt przy podziale na {numberPeople}:</ResultTitle>
                <ResultValue>{priceForPerson.toFixed(2)} zł</ResultValue>
            </ResultWrapper>
        </Wrapper>
    )
}

export default Results