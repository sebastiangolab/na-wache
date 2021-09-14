import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    font-family: ${({theme}) => theme.fontFamily.montserrat};
    margin-bottom: 35px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.blue};
    padding: 5px 12px;
    border: none;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 3px;

    & strong {
        font-size: 25px;
        margin-right: 5px;
    }
`
const AddStopPlaceButton = ({ placesValue, setPlacesValue, stopInputs, setStopInputs }) => {

    const handleOnClick = () => {
        setPlacesValue([
            ...placesValue,
            {
                id: `stop${stopInputs.length + 1}`,
                value: null
            }
        ])

        setStopInputs([
            ...stopInputs,
            {
                id: `stop${stopInputs.length + 1}`,
                label: `Przystanek nr. ${stopInputs.length + 1}`
            }
        ])
    }

    return (
        <Wrapper onClick={handleOnClick}>
            <strong>+</strong> Dodaj przystanek
        </Wrapper>
    )
}

export default AddStopPlaceButton
