import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../styles/Input'

const Wrapper = styled.div`
    position: absolute;
    top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 9;
`

const StyledInput = styled(Input)`
    width: 50%;
    margin-bottom: 0;
`

const Button = styled.button`
    width: 150px;
    margin-left: 5px;
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.blue};
    border: none;
    box-shadow: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.colors.blueHover};
    }
`

const SearchMapInput = ({ isModalOpen }) => {

    const inputRef = useRef(null)
    useEffect(
        () => {
            if (isModalOpen) {
                setTimeout(() => { inputRef.current.focus() }, 1);
            }
        }, [isModalOpen]
    )
    
    const [inputValue, setInputValue] = useState()
    const handleOnChange = event => setInputValue(event.target.value)

    return (
        <Wrapper>
            <StyledInput
                type='text'
                value={inputValue}
                onChange={handleOnChange}
                placeholder='Wyszukaj miejsce'
                ref={inputRef}
            />
            <Button>Szukaj</Button>
        </Wrapper>
    )
}

export default SearchMapInput