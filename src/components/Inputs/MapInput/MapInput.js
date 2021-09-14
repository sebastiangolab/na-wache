import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import InputWrapper from '../styles/InputWrapper'
import Label from '../styles/Label'
import Input from '../styles/Input'

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
                <h1>{label}</h1>
            </Modal>
        </>
    )
}

export default MapInput