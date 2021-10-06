import React, { useRef, useEffect, useContext } from 'react'
import { ModalContext } from '../Modal/Modal'
import styled from 'styled-components'
import Input from '../../assets/styles/Input/Input'
import Button from '../../assets/styles/Button/Button'
import AcceptGoogleMapButton from '../Buttons/AcceptGoogleMapButton/AcceptGoogleMapButton'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

const Wrapper = styled.div`
    position: absolute;
    top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 9;
`

const StyledCombobox = styled(Combobox)`
    position: relative;
    width: 50%;
`

const StyledInput = styled(Input)`
    width: 100%;
    margin-bottom: 0;
`

const StyledComboboxList = styled(ComboboxList)`
    width: 100%;
    position: absolute;
    top: 50px;
    left: 0;
    background: ${({theme}) => theme.colors.white};
    list-style-type: none;
`

const StyledComboboxOption = styled(ComboboxOption)`
    padding: 7px 10px;
    cursor: pointer;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.colors.lightGray}
    }
`

const StyledButton = styled(Button)`
    width: 150px;
    margin-left: 5px;
    padding: 5px;
`

const SearchMapInput = ({ mapPanTo, setInputAdressObject }) => {

    const { isModalOpen, hideModal } = useContext(ModalContext)

    const inputRef = useRef(null)
    useEffect(
        () => {
            if (isModalOpen) {
                setTimeout(() => { inputRef.current.focus() }, 1);
            }
        }, [isModalOpen]
    )

    const {
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: {
                country: 'pl',
            },
        },
    })

    const handleOnChange = e => setValue(e.target.value) 

    const getAutoCompleteResults = async (address) => {
        try {
            const results = await getGeocode({ address, region: 'PL' })
            setValue(results[0].formatted_address, false)

            const coords = await getLatLng(results[0])
            mapPanTo(coords.lat, coords.lng)

            setInputAdressObject(results[0].formatted_address, coords)
            clearSuggestions()
        } catch (error) {
            alert('Nie znaleziono takiego adresu') 
            setValue('', false)
            mapPanTo(null, null)
            setInputAdressObject('', null)
            clearSuggestions()
        }
    }
    
    const handleSelect = address => {
        setValue(address, false)
        getAutoCompleteResults(address)
    }

    const handleKeyPress = event => event.charCode === 13 ? getAutoCompleteResults(value) : null

    const handleOnClick = () => getAutoCompleteResults(value) 

    const handleOnClickAcceptButton = () => hideModal()

    return (
        <>
            <Wrapper>
                <StyledCombobox onSelect={handleSelect}>
                    <StyledInput
                        type='text'
                        value={value}
                        onChange={handleOnChange}
                        placeholder='Wyszukaj miejsce'
                        ref={inputRef}
                        onKeyPress={handleKeyPress}
                    />
                    <StyledComboboxList>
                        {value.length >= 3 && status === "OK" &&
                        data.map(({ description }) => (
                            <StyledComboboxOption key={description} value={description} />
                        ))}
                    </StyledComboboxList>
                </StyledCombobox>
                <StyledButton onClick={handleOnClick}>Szukaj</StyledButton> 
            </Wrapper>
            <AcceptGoogleMapButton onClick={handleOnClickAcceptButton}>Zatwierdź</AcceptGoogleMapButton>
        </>
    )
}

export default SearchMapInput