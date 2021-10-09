import React, { createRef, useEffect, createContext } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.dialog`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    border: none;
    z-index: -1;
    max-width: 100%;
    max-height: 100%;

    &::backdrop {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(3px);
    }
`

export const ModalContext = createContext()

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
            <ModalContext.Provider value={{
                isModalOpen: isOpen,
                hideModal
            }}>
                {children}
            </ModalContext.Provider>
        </Wrapper>,
       document.body
    )
}

export default Modal