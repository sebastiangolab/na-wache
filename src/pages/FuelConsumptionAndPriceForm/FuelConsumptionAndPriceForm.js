import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NumberInput from '../../components/Inputs/NumberInput/NumberInput'
import Button from '../../assets/styles/Button/Button'
import { ValidateMessageContext } from '../../components/Content/Content'
import { AppContext } from '../../store/store'

const FuelConsumptionAndPriceForm = () => {

    const { setValidateMessageText } = useContext(ValidateMessageContext) 
    const { formValues, setFormValues } = useContext(AppContext)

    const [fuelConsumption, setFuelConsumption] = useState(formValues.fuelConsumption)
    const [fuelPrice, setFuelPrice] = useState(formValues.fuelPrice)

    const history = useHistory()

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
                label={'Średnie spalanie pojazdu na 100 km'}
                value={fuelConsumption}
                setValue={setFuelConsumption}
            />

            <NumberInput
                label={'Średnia cena paliwa za 1 litr (zł)'}
                value={fuelPrice}
                setValue={setFuelPrice}
            />

            <Button onClick={handleOnClick}>Przejdź dalej</Button>
        </>
    )
}

export default FuelConsumptionAndPriceForm