import React, { useContext, useState, useLayoutEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import NumberInput from '../../components/Inputs/NumberInput/NumberInput'
import Button from '../../assets/styles/Button/Button'

import { ValidateMessageContext } from '../../components/Content/Content'
import { AppContext } from '../../store/store'

const FuelConsumptionAndPriceForm = () => {

    const { setValidateMessageText } = useContext(ValidateMessageContext) 
    const { setPath, formValues, setFormValues } = useContext(AppContext)

    const history = useHistory()
    const location = useLocation()

    useLayoutEffect(
        () => {
            let result = true

            if ( formValues.distance <= 0 ) {
                result = false
                history.push('/')
            }

            if (result === true)
                setPath(location.pathname)
        }, []
    )

    const [fuelConsumption, setFuelConsumption] = useState(formValues.fuelConsumption)
    const [fuelPrice, setFuelPrice] = useState(formValues.fuelPrice)

    const validateFuelConsumptionAndPriceForm = () => {
        let result = true

        if ( fuelConsumption === '' || fuelPrice === '' ) 
            result = 'Wszystkie pola muszą być uzupełnione!'

        if (fuelConsumption < 0 || fuelPrice < 0)
            result = 'Wartości pól nie mogą być ujemne'

        if (fuelConsumption === 0 || fuelConsumption === '0' || fuelPrice === 0 || fuelPrice === '0')
            result = 'Wartości pól muszą być większe niż 0'

        setValidateMessageText('')
        return result
    }
    
    const handleOnClick = () => {
        if (validateFuelConsumptionAndPriceForm() === true) {
            setFormValues({
                ...formValues,
                fuelConsumption: fuelConsumption,
                fuelPrice: fuelPrice,
            })

            history.push('/back-and-number-people')
        } else {
            setValidateMessageText(validateFuelConsumptionAndPriceForm())
        }
    }

    return (
        <>
            <NumberInput
                placeholder='Np. 6,7'
                label='Średnie spalanie pojazdu'
                unit='l / 100km'
                value={fuelConsumption}
                setValue={setFuelConsumption}
            />

            <NumberInput
                placeholder='Np. 5,64'
                label='Średnia cena paliwa'
                unit='zł / l'
                value={fuelPrice}
                setValue={setFuelPrice}
            />

            <Button onClick={handleOnClick}>Przejdź dalej</Button>
        </>
    )
}

export default FuelConsumptionAndPriceForm