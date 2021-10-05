import React, { useState } from 'react'
import styled from 'styled-components'
import MapInput from '../../components/Inputs/MapInput/MapInput'
import AddStopPlaceButton from '../../components/Buttons/AddStopPlaceButton/AddStopPlaceButton' 
import DeleteStopPlaceButton from '../../components/Buttons/DeleteStopPlaceButton/DeleteStopPlaceButton'

const StopInputWrapper = styled.div`
    display: flex;
    align-items: center;
`

const LocationsForm = () => {

    const [placesValue, setPlacesValue] = useState([
        {
            id: 'startPlace',
            adress: '',
            coords: {
                lat: null,
                lng: null
            }
        },
        {
            id: 'endPlace',
            adress: '',
            coords: {
                lat: null,
                lng: null
            }
        }
    ])

    const [stopInputs, setStopInputs] = useState([])

    const stopInputsElements = stopInputs.map(input => (
        <StopInputWrapper key={input.id}>
            <MapInput 
                id={input.id}
                label={input.label}  
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
            />
            <DeleteStopPlaceButton
                id={input.id}
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
                stopInputs={stopInputs}
                setStopInputs={setStopInputs}
            />
        </StopInputWrapper>
    )) 

    return (
        <>
            <MapInput 
                key='startPlace'
                id='startPlace'
                label='Miejsce startowe' 
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
            />

            <AddStopPlaceButton
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
                stopInputs={stopInputs}
                setStopInputs={setStopInputs}
            />

            {stopInputsElements}  

            <MapInput 
                key='endPlace'
                id='endPlace'
                label='Miejsce docelowe' 
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
            />
        </>
    )
}

export default LocationsForm