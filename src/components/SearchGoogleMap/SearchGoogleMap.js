import React, { useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '../../assets/keys/GoogleMapsApiKey'

const mapContainerStyle = {
    width: '80vw',
    height: '80vh',
}

const zoomMap = 10

const centerMap = {
    lat: 52.22738770234014,
    lng: 21.009001719362278,
}

const mapOptions = {
    disableDefaultUI: true,
}

const SearchGoogleMap = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    })

    const mapRef = useRef()
    const onMapLoad = useCallback(map => {
        mapRef.current = map
    }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={centerMap}
            zoom={zoomMap}
            options={mapOptions}
            onLoad={onMapLoad}
        />
    ) : <></>
}

export default SearchGoogleMap 