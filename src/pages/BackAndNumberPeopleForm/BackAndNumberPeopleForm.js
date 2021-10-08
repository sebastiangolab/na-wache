import React, { useContext, useState, useLayoutEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import NumberInput from '../../components/Inputs/NumberInput/NumberInput'
import Button from '../../assets/styles/Button/Button'
import SelectInput from '../../components/Inputs/SelectInput/SelectInput'

import { ValidateMessageContext } from '../../components/Content/Content'
import { AppContext } from '../../store/store'

const selectOptions = [
    { value: 1, label: 'Nie' },
    { value: 2, label: 'Tak' }
]

const BackAndNumberPeopleForm = () => {

    const { setValidateMessageText } = useContext(ValidateMessageContext) 
    const { setPath, formValues, setFormValues } = useContext(AppContext)

    const history = useHistory()
    const location = useLocation()

    useLayoutEffect(
        () => {

            if (
                formValues.distance <= 0
                || formValues.fuelConsumption !== ''
                || formValues.fuelPrice !== ''
            ) history.push('/')

            setPath(location.pathname)
        }, []
    )

    const [numberPeople, setNumberPeople] = useState(formValues.numberPeople)
    const [isWayBack, setIsWayBack] = useState(selectOptions[0])

    const validateFuelConsumptionAndPriceForm = () => {
        let result = true

        if (numberPeople <= 0) 
            result = 'Ilość osób musi być większa niż 0' 

        setValidateMessageText('')
        return result
    }
    
    const handleOnClick = () => {
        if (validateFuelConsumptionAndPriceForm() === true) {
            setFormValues({
                ...formValues,
                numberPeople: numberPeople,
                isWayBack: isWayBack,
            })

            history.push('/results')
        } else {
            setValidateMessageText(validateFuelConsumptionAndPriceForm())
        }
    }

    return (
        <>
            <NumberInput
                label={'Ilość osób'}
                value={numberPeople}
                setValue={setNumberPeople}
            />

            <SelectInput label={'Podróż w 2 strony?'} options={selectOptions} value={isWayBack} setValue={setIsWayBack} />

            <Button onClick={handleOnClick}>Przejdź dalej</Button>
        </>
    )
}

export default BackAndNumberPeopleForm