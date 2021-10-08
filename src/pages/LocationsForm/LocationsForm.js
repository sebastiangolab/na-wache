import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import MapInput from '../../components/Inputs/MapInput/MapInput'
import AddStopPlaceButton from '../../components/Buttons/AddStopPlaceButton/AddStopPlaceButton' 
import DeleteStopPlaceButton from '../../components/Buttons/DeleteStopPlaceButton/DeleteStopPlaceButton'
import Button from '../../assets/styles/Button/Button'

import DistanceComponent from '../../components/DistanceComponent/DistanceComponent'
import { ValidateMessageContext } from '../../components/Content/Content'

const StopInputWrapper = styled.div`
    display: flex;
    align-items: center;
`

const PlacesButtonWrapper = styled.div`
    display: flex;
`

const LocationsForm = () => {

    const { setValidateMessageText } = useContext(ValidateMessageContext)

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

    const [distances, setDistances] = useState(null)
    
    const [stopInputs, setStopInputs] = useState([])

    const validateLocationsForm = () => {

        let result = true

        if (
            placesValue.length === 2
            && placesValue[0].adress === placesValue[1].adress
        ) result = 'Miejsce startowe nie może być takie samo jako miejsce docelowe!'

        placesValue.forEach(place => {
            if (place.adress === '')
                result = 'Wszystkie pola muszą być uzupełnione!'
        })

        setValidateMessageText('')
        return result
    }

    const handleOnClick = () => {
        if (validateLocationsForm() === true) {  
            const placesStopFiltered = placesValue.filter(place => place.id !== 'startPlace' && place.id !== 'endPlace')
            const placesStopCoords = placesStopFiltered.map(place => place.coords)

            const originsCoords = [placesValue[0].coords, ...placesStopCoords]
            const destinationsCoords = [...placesStopCoords, placesValue[1].coords]

            setDistances({
                originsCoords,
                destinationsCoords
            })
        } else {
            setValidateMessageText(validateLocationsForm())
        }
    }

    const stopInputsElements = stopInputs.map(input => (
        <StopInputWrapper key={input.id}>
            <MapInput 
                id={input.id}
                label={input.label} 
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
            />
        </StopInputWrapper>
    ))
     
    return (
        <>  
            {distances !== null && 
                <DistanceComponent distances={distances} />
            }

            <MapInput 
                key='startPlace'
                id='startPlace'
                label='Miejsce startowe' 
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
            />

            {stopInputsElements}  

            <PlacesButtonWrapper>
                <AddStopPlaceButton
                    placesValue={placesValue}
                    setPlacesValue={setPlacesValue}
                    stopInputs={stopInputs}
                    setStopInputs={setStopInputs}
                />

                { stopInputs.length > 0 &&
                    <DeleteStopPlaceButton
                        placesValue={placesValue}
                        setPlacesValue={setPlacesValue}
                        stopInputs={stopInputs}
                        setStopInputs={setStopInputs}
                    />
                }
            </PlacesButtonWrapper>

            <MapInput 
                key='endPlace'
                id='endPlace'
                label='Miejsce docelowe' 
                placesValue={placesValue}
                setPlacesValue={setPlacesValue}
            />

            <Button onClick={handleOnClick}>Przejdź dalej</Button>
        </>
    )
}

export default LocationsForm