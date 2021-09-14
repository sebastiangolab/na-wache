import React, { useState } from 'react'
import InputWrapper from '../styles/InputWrapper'
import Label from '../styles/Label'
import Input from '../styles/Input'

const MapInput = ({ id, label, placesValue, setPlacesValue }) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnClick = () => {
        setInputValue('obiekt mapy')
        
        const updatedPlacesValue = placesValue.map(place => place.id === id ? {...place, value: 'obiekt mapy'} : place)
        setPlacesValue(updatedPlacesValue)
    }

    return (
        <InputWrapper>
            <Label>{label}</Label>
            <Input 
                type="text"
                value={inputValue}
                onChange={() => {}}
                onClick={handleOnClick}
            />
        </InputWrapper>
    )
}

export default MapInput