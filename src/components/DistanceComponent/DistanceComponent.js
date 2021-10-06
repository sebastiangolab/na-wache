import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { DistanceMatrixService } from '@react-google-maps/api'
import GoogleMapLoad from '../GoogleMapLoad/GoogleMapLoad'
import { AppContext } from '../../store/store'

const DistanceComponent = ({ distances }) => {

    const { formValues, setFormValues } = useContext(AppContext)
    
    const history = useHistory()

    const handleOnLoadDistanceMatrixService = response => {
        let countedKilometers = 0;

        response.rows.forEach((row, index) => {
            countedKilometers += (row.elements[index].distance.value / 1000).toFixed(1) * 1
        })

        setFormValues({
            ...formValues,
            distance: countedKilometers,
        })    
        
        history.push('/fuel-consumption-and-price')
    }

    return (
        <GoogleMapLoad>
            {formValues.distance === 0 &&
                <DistanceMatrixService
                    options={{
                        origins: distances.originsCoords,
                        destinations: distances.destinationsCoords,
                        travelMode: "DRIVING",
                    }}
                    callback = {response => { handleOnLoadDistanceMatrixService(response) }}
                />
            }
        </GoogleMapLoad>
    )
}

export default DistanceComponent 