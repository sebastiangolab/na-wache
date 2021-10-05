import React, { useCallback, useRef, useContext, useState } from 'react'
import { ModalContext } from '../Modal/Modal'
import styled from 'styled-components'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '../../assets/keys/GoogleMapsApiKey' 
import GoogleMapSearchForm from '../GoogleMapSearchForm/GoogleMapSearchForm'
import CloseMapButton from '../Buttons/CloseMapButton/CloseMapButton'

const mapContainerStyle = {
    width: '80vw',
    height: '80vh',
    zIndex: '1',
}

const zoomMap = 10

const centerMap = {
    lat: 52.22738770234014,
    lng: 21.009001719362278,
}

const mapOptions = {
    disableDefaultUI: true,
    disableDoubleClickZoom: false,
    draggable: true,
    zoomControl: false,
}

const libraries = ['places']

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    border: 1px solid ${({theme}) => theme.colors.white};
`

const SearchGoogleMap = ({ setInputAdressObject }) => {

    const { hideModal } = useContext(ModalContext)
    const [MarkerCoords, setMarkerCoords] = useState(null)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })

    const mapRef = useRef()
    const onMapLoad = useCallback(map => {
        mapRef.current = map
    }, [])

    const mapPanTo = (lat, lng) => {
        if (lat === null || lng === null) {
            setMarkerCoords(null)
            return null
        }

        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(15)
        setMarkerCoords({ lat, lng })
    }
    
    return isLoaded ? (
        <Wrapper>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={centerMap}
                zoom={zoomMap}
                options={mapOptions}
                onLoad={onMapLoad}
            >   
                {MarkerCoords !== null &&
                    <Marker 
                        position={{lat: MarkerCoords.lat, lng: MarkerCoords.lng}}
                    />
                }
            </GoogleMap>
            <CloseMapButton onClick={hideModal} />
            <GoogleMapSearchForm mapPanTo={mapPanTo} setInputAdressObject={setInputAdressObject} />
        </Wrapper>
    ) : <></>
}

export default SearchGoogleMap 