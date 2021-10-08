import React, { useContext, useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { AppContext } from '../../store/store'

const Page404 = () => {

    const { setPath } = useContext(AppContext)

    const location = useLocation()

    useLayoutEffect(
        () => {
            setPath(location.pathname)
        }, []
    )

    return (
        <>
            <h2>Nie znaleziono takiej strony</h2>
            <br/>
            <p>Sprawdź czy link jest poprawny</p>
        </>
    )
}

export default Page404