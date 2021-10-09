import React, { useContext, useLayoutEffect } from 'react'
import { useLocation, useHistory } from 'react-router'
import styled from 'styled-components'

import { AppContext } from '../../store/store'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    
    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            padding: 10px 0;
         }
    }
`

const ResultWrapper = styled.div`
    margin-bottom: ${props => !props.lastElement ? '50px' : '0'};

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            margin-bottom: ${props => !props.lastElement ? '50px' : '0'};
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            margin-bottom: ${props => !props.lastElement ? '45px' : '0'};
        }
    }
`

const ResultTitle = styled.h2`
    font-size: ${({theme}) => theme.sizes.desktop.resultTitle};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-bottom: 12px;

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.resultTitle};
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.resultTitle};
         }
    }
`

const ResultValue = styled.p`
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({theme}) => theme.sizes.desktop.resultValue};
    font-weight: ${({theme}) => theme.fonts.bold};

    @media (max-width: ${({theme}) => theme.rwdSizes.tablet}) {
        & {
            font-size: ${({theme}) => theme.sizes.tablet.resultValue};
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.resultValue};
         }
    }
`

const Results = () => {

    const { setPath, formValues } = useContext(AppContext)

    const history = useHistory()
    const location = useLocation()

    useLayoutEffect(
        () => {
            let result = true

            if (
                formValues.distance <= 0
                || formValues.fuelConsumption === ''
                || formValues.fuelPrice === ''
                || formValues.numberPeople === '' 
            ) {
                result = false
                history.push('/')
            }

            if (result === true)
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
                <ResultValue>{finalDistance.toFixed(1)} km</ResultValue>
            </ResultWrapper>

            <ResultWrapper>
                <ResultTitle>Cała podróż będzie kosztować:</ResultTitle>
                <ResultValue>{priceForTravel.toFixed(2)} zł</ResultValue>
            </ResultWrapper>

            <ResultWrapper lastElement>
                <ResultTitle>Koszt przy podziale na {numberPeople}:</ResultTitle>
                <ResultValue>{priceForPerson.toFixed(2)} zł</ResultValue>
            </ResultWrapper>
        </Wrapper>
    )
}

export default Results