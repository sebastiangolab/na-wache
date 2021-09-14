import React, { useState } from 'react'
import MapInput from '../../components/Inputs/MapInput/MapInput'
import AddStopPlaceButton from '../../components/AddStopPlaceButton/AddStopPlaceButton' 

const LocationsForm = () => {

    const [placesValue, setPlacesValue] = useState([
        {
            id: 'startPlace',
            value: null
        },
        {
            id: 'endPlace',
            value: null
        }
    ])

    const [stopInputs, setStopInputs] = useState([])

    const stopInputsElements = stopInputs.map(input => (
        <MapInput 
            key={input.id}
            id={input.id}
            label={input.label}  
            placesValue={placesValue}
            setPlacesValue={setPlacesValue}
        />
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