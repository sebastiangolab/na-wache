import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const BlurWrapper = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999998;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
`

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    border: none;
    z-index: 99999999;
    max-width: 100%;
    max-height: 100%;
`

export const ModalContext = createContext()

const Modal = ({ hideModal, isOpen, children }) => {

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
        <BlurWrapper isOpen={isOpen}>
            <Wrapper onClick={hideDialogWhenOutside}>
                <ModalContext.Provider value={{
                    isModalOpen: isOpen,
                    hideModal
                }}>
                    {children}
                </ModalContext.Provider>
            </Wrapper>
        </BlurWrapper>,
       document.body
    )
}

export default Modal