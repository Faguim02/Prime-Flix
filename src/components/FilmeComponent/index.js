import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FilmeComponent = ({thumb, id}) => {

    const Article = styled.article`
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;
        margin: 20px;
        width: 200px;
        height: 350px;
        box-shadow: 5px 5px 5px black;
        border-radius: 10px;
    `
    const Title = styled.h3`
        display: flex;
    `
    const Thumb = styled.img`
        object-fit: cover;
        width: 200px;
        height: 300px;
    `
    const Button = styled.button`
        width: 200px;
        padding: 12px;
        border-radius: 0 0 10px 10px;
        background-color: #777777;
        color: white;
        cursor: pointer;
        transition: 0.5s;
        :hover{
            background-color: black;
            color: white;
        }
    `

    return (
        <Article>
            <Thumb src={thumb} alt='thumb'/>
            <Link to={`filme/${id}`}><Button>Ver Mais</Button></Link>
        </Article>
    )
}

export default FilmeComponent