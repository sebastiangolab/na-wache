import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const StoreProvider = ({ children }) => {

    const [formValues, setFormValues] = useState({
        distance: 0,
        fuelConsumption: '',
        fuelPrice: '',
        numberPeople: 1,
        isWayBack: false
    })

    return (
        <AppContext.Provider value={{
            formValues,
            setFormValues
        }}>
            {children}
        </AppContext.Provider>
    )
}