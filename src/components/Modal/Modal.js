import React, { createRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


const Wrapper = styled.dialog`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 5px;
    border: 1px solid ${({theme}) => theme.colors.gray};

    &::backdrop {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(3px);
    }
`

const Modal = ({ hideModal, isOpen, children }) => {

    const dialogRef = createRef()

    useEffect(
        () => {
            isOpen === true
            ? dialogRef.current.showModal()
            : dialogRef.current.close()
        }, [isOpen]
    )

    const hideDialogWhenOutside = e => {
        const rect = e.target.getBoundingClientRect()

        const clickedInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
        )

        if (clickedInDialog === false)
            hideModal()
    }

    return ReactDOM.createPortal(
        <Wrapper ref={dialogRef} onClick={hideDialogWhenOutside}>
            {children}
        </Wrapper>,
        document.body
    )
}

export default Modal