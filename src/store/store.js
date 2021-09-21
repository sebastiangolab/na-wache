import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const StoreProvider = ({ children }) => {

    const [formValues, setFormValues] = useState({
        distance: 0,
        averageFuleConsumption: 0,
        averageFuelPrice: 0,
        numberPeople: 0,
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