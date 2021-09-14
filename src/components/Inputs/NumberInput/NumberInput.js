import React from 'react'

import InputWrapper from '../styles/InputWrapper'
import Label from '../styles/Label'
import Input from '../styles/Input'

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