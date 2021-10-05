import React from 'react'
import styled from 'styled-components'
import Button from '../../../assets/styles/Button/Button'

const Wrapper = styled(Button)`
    width: auto;
    padding: 15px 20px;
    margin-bottom: 5px;
    margin-left: 5px;
`

const DeleteStopPlaceButton = ({
    id,
    placesValue,
    setPlacesValue,
    stopInputs,
    setStopInputs,
}) => {

    const handleOnClick = () => {
        const filteredPlacesValue = placesValue.filter(place => place.id !== id)
        let counterPlacesValue = 0
        const updatedPlacesValue = filteredPlacesValue.map(place => {
            if (place.id === 'startPlace' || place.id === 'endPlace') return place

            counterPlacesValue++
            return ({
                id: `stop${counterPlacesValue}`,
                adress: place.adress,
                coords: place.coords
            })
        })
        setPlacesValue(updatedPlacesValue) 

        const filteredStopInputs = stopInputs.filter(stop => stop.id !== id) 
        let counterStopInputs = 0
        const updatedStopInputs = filteredStopInputs.map(stop => {
            counterStopInputs++
            return ({
                id: `stop${counterStopInputs}`,
                label: `Przystanek nr. ${counterStopInputs}`
            })
        })
        setStopInputs(updatedStopInputs)
    }

    return <Wrapper onClick={handleOnClick}>X</Wrapper>
}

export default DeleteStopPlaceButton