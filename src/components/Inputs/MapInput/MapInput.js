import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import InputWrapper from '../../../assets/styles/InputWrapper/InputWrapper'
import Label from '../../../assets/styles/Label/Label'
import Input from '../../../assets/styles/Input/Input'
import SearchGoogleMap from '../../SearchGoogleMap/SearchGoogleMap'

const MapInput = ({ id, label, placesValue, setPlacesValue }) => {

    const [ModalOpen, setModalOpen] = useState(false)
    const showModal = () => setModalOpen(true)
    const hideModal = () => setModalOpen(false)

    const [inputValue, setInputValue] = useState('')

    const handleOnClick = () => {
        setInputValue('obiekt mapy')
        
        const updatedPlacesValue = placesValue.map(place => place.id === id ? {...place, value: 'obiekt mapy'} : place)
        setPlacesValue(updatedPlacesValue)

        showModal()
    }

    return (
        <>
            <InputWrapper>
                <Label>{label}</Label>
                <Input 
                    type="text"
                    value={inputValue}
                    onChange={() => {}}
                    onClick={handleOnClick}
                />
            </InputWrapper>

            <Modal 
                hideModal={hideModal}
                isOpen={ModalOpen}
            >
                <SearchGoogleMap />
            </Modal>
        </>
    )
}

export default MapInput