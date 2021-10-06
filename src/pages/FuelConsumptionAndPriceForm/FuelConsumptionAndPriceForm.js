import React, { useContext, useState } from 'react'
import NumberInput from '../../components/Inputs/NumberInput/NumberInput'
import Button from '../../assets/styles/Button/Button'
import { ValidateMessageContext } from '../../components/Content/Content'

const FuelConsumptionAndPriceForm = () => {

    const { setValidateMessageText } = useContext(ValidateMessageContext) 

    const [fuelConsumption, setFuelConsumption] = useState(null)
    const [fuelPrice, setFuelPrice] = useState(null)
    
    const handleOnClick = () => {
        alert('test')
    }

    return (
        <>
            <NumberInput
                label={'Średnie spalanie pojazdu na 100 km'}
                value={fuelConsumption}
                setValue={setFuelConsumption}
            />

            <NumberInput
                label={'Średnia cena paliwa za 1 litr'}
                value={fuelPrice}
                setValue={setFuelPrice}
            />

            <Button onClick={handleOnClick}>Przejdź dalej</Button>
        </>
    )
}

export default FuelConsumptionAndPriceForm