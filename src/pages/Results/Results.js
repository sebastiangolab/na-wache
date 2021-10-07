import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const ResultWrapper = styled.div`
    margin-bottom: 55px;
`

const ResultTitle = styled.h2`
    font-size: ${({theme}) => theme.sizes.desktop.medium};
    font-weight: ${({theme}) => theme.fonts.bold};
    margin-top: 30px;
    margin-bottom: 20px;
`

const ResultValue = styled.p`
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({theme}) => theme.sizes.desktop.big};
    font-weight: ${({theme}) => theme.fonts.bold};
`

const Results = () => {
    return (
        <Wrapper>
            <ResultWrapper>
                <ResultTitle>Cała podróż będzie kosztować:</ResultTitle>
                <ResultValue>150 zł</ResultValue>
            </ResultWrapper>

            <ResultWrapper>
                <ResultTitle>Więc na 5 wychodzi po:</ResultTitle>
                <ResultValue>30 zł</ResultValue>
            </ResultWrapper>
        </Wrapper>
    )
}

export default Results