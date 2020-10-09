import React from 'react'
import styled from 'styled-components'


const StyledChar = styled.div`
    background: lightgray;
    border: 3px solid black;
    border-radius: 5px;
    margin: 1% 0;
    opacity: 50%;

    &:hover {
        opacity: 100%;
        background: lightblue;
        transition: all 0.3s ease-in-out;
    }
`

const Character = (props) => {
    const {data} = props

    return (
        <StyledChar >
            <h2>{data.name}</h2>
            <p>Birth Year: {data.birth_year}</p>
            <p>Gender: {data.gender}</p>
            <p>Height: {data.height}   Mass: {data.mass}</p>
            <p>Eye color: {data.eye_color}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
        </StyledChar>
    )
}

export default Character