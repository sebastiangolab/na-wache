import React from 'react'
import styled from 'styled-components'
import Button from '../../assets/styles/Button/Button'

const Wrapper = styled(Button)`
    width: auto;
    font-size: ${({theme}) => theme.sizes.desktop.default};
    margin-bottom: 35px;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    justify-content: center;

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
