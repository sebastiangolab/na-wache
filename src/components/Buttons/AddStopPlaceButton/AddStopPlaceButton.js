import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../../../assets/styles/Button/Button'
import { ValidateMessageContext } from '../../Content/Content'

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

    const { setValidateMessageText } = useContext(ValidateMessageContext)

    const validateAddStopPlaceButton = () => {

        let result = true

        placesValue.forEach((place, index) => {
            if (
                place.id === 'startPlace' 
                && place.adress === ''
            ) result = 'Wypełnij najpierw startową i końcową lokalizację' 
                
            if (
                place.id === 'endPlace' 
                && place.adress === ''
            ) result = 'Wypełnij najpierw startową i końcową lokalizację' 
                
            if (
                placesValue.length > 2
                && index === placesValue.length - 1
                && place.adress === ''
            ) result = 'Uzupełnij ostatni przystanek'
        });

        setValidateMessageText('')
        return result
    }

    const handleOnClick = () => {
        if (validateAddStopPlaceButton() === true) {
            setPlacesValue([
                ...placesValue,
                {
                    id: `stop${stopInputs.length + 1}`,
                    adress: '',
                    coords: {
                        lat: null,
                        lng: null
                    }
                }
            ])

            setStopInputs([
                ...stopInputs,
                {
                    id: `stop${stopInputs.length + 1}`,
                    label: `Przystanek nr. ${stopInputs.length + 1}`
                }
            ])
        } else {
            setValidateMessageText(validateAddStopPlaceButton())
        }
    }

    return (
        <Wrapper onClick={handleOnClick}>
            <strong>+</strong> Dodaj przystanek
        </Wrapper>
    )
}

export default AddStopPlaceButton
