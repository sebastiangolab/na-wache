import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '../../assets/keys/GoogleMapsApiKey' 

const libraries = ['places']

const GoogleMapLoad = ({ children }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })
    return isLoaded ? (
        <>
            {children}
        </>
    ) : <></>
}

export default GoogleMapLoad