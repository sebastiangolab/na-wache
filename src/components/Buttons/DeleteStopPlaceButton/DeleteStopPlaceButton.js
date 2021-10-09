import React from 'react'
import styled from 'styled-components'
import Button from '../../../assets/styles/Button/Button'

const Wrapper = styled(Button)`
    width: auto;
    font-size: ${({theme}) => theme.sizes.desktop.default};
    margin-bottom: 35px;
    padding: 8px 14px;
    margin-left: 15px;

    @media (max-width: ${({theme}) => theme.rwdSizes.bigPhone}) {
        & {
            margin-bottom: 30px;
        }
    }

    @media (max-width: ${({theme}) => theme.rwdSizes.smallPhone}) {
        & {
            font-size: ${({theme}) => theme.sizes.smallPhone.placeButton};
            padding: 8px 12px;
            margin-left: 5px;
        }
    }
`

const DeleteStopPlaceButton = ({
    placesValue,
    setPlacesValue,
    stopInputs,
    setStopInputs,
}) => {

    const handleOnClick = () => {
        const filteredStopInputs = stopInputs.filter((stop, index) => index !== stopInputs.length - 1) 
        const filteredPlacesValue = placesValue.filter((place, index) => index !== placesValue.length - 1)

        setStopInputs(filteredStopInputs)
        setPlacesValue(filteredPlacesValue)
    }

    return <Wrapper onClick={handleOnClick}>X Usuń przystanek</Wrapper>
}

export default DeleteStopPlaceButton