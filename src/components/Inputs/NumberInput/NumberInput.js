import React from 'react'
import styled from 'styled-components'

import InputWrapper from '../../../assets/styles/InputWrapper/InputWrapper'
import Label from '../../../assets/styles/Label/Label'
import Input from '../../../assets/styles/Input/Input'

const Wrapper = styled(Input)`
    width: 100%;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const NumberInputWrapper = styled.div`
    width: 100%;
    position: relative;
`

const NumberInputUnit = styled.p`
    position: absolute;
    top: 1px;
    right: 1px;
    font-family: ${({theme}) => theme.fontFamily.montserrat};
    font-size: ${({theme}) => theme.sizes.desktop.default};
    border-left: 1px solid ${({theme}) => theme.colors.gray};
    padding: 14px 15px;
    border-radius: 3px;
    background-color: ${({theme}) => theme.colors.lightGray};
`

const NumberInput = ({ label, placeholder, unit, value, setValue }) => {

    const handleOnChange = event => setValue(event.target.value)

    return (
        <InputWrapper>
            <Label>{label}</Label>
            <NumberInputWrapper>
                <Wrapper 
                    type='number'
                    placeholder={placeholder}
                    value={value}
                    onChange={handleOnChange}
                    min={'1'}
                />
                {unit &&
                    <NumberInputUnit>{unit}</NumberInputUnit>
                }
            </NumberInputWrapper>
        </InputWrapper>
    )
}

export default NumberInput