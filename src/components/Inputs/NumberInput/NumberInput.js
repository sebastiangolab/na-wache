import React from 'react'
import InputWrapper from '../../../assets/styles/InputWrapper/InputWrapper'
import Label from '../../../assets/styles/Label/Label'
import Input from '../../../assets/styles/Input/Input'

const NumberInput = ({ label, value, setValue }) => {

    const handleOnChange = event => setValue(event.target.value)

    return (
        <InputWrapper>
            <Label>{label}</Label>
            <Input 
                type='number'
                value={value}
                onChange={handleOnChange}
            />
        </InputWrapper>
    )
}

export default NumberInput