import React, { useCallback, useRef, useContext, useState } from 'react'
import { ModalContext } from '../Modal/Modal'
import styled from 'styled-components'
import { GoogleMap, Marker } from '@react-google-maps/api'
import GoogleMapLoad from '../GoogleMapLoad/GoogleMapLoad'
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

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    border: 1px solid ${({theme}) => theme.colors.white};
`

const GoogleMapWrapper = ({ setInputAdressObject }) => {

    const { hideModal } = useContext(ModalContext)
    const [MarkerCoords, setMarkerCoords] = useState(null)

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
    
    return (
        <Wrapper>
            <GoogleMapLoad>
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
            </GoogleMapLoad>
        </Wrapper>
    )
}

export default GoogleMapWrapper 