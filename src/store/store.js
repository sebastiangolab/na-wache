import React, { createContext, useState } from 'react'

export const appContext = createContext()

export const StoreProvider = ({ children }) => {

    const [formValues, setFormValues] = useState({
        startPlace: '',
        endPlace: '',
        stopsPlaces: [],
        distance: 0,
        averageFuleConsumption: 0,
        averageFuelPrice: 0,
        numberPeople: 0,
        isWayBack: false
    })

    return (
        <appContext.Provider value={{
            formValues,
            setFormValues
        }}>
            {children}
        </appContext.Provider>
    )
}