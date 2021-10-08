import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const StoreProvider = ({ children }) => {

    const [path, setPath] = useState('/')

    const [formValues, setFormValues] = useState({
        distance: 0,
        fuelConsumption: '',
        fuelPrice: '',
        numberPeople: '',
        isWayBack: 1
    })

    return (
        <AppContext.Provider value={{
            path,
            setPath,
            formValues,
            setFormValues
        }}>
            {children}
        </AppContext.Provider>
    )
}