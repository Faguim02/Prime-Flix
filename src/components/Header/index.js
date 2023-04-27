import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {

    const Header = styled.header`
        background-color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 15px;
    `
    const Logo = styled.figure`
        margin: 0;
        padding: 0;
    `
    const ButtonFilme = styled.button`
        padding: 10px;
        border-radius: 5px;
    `
    const Paragrafo = styled.p`
        color: black;
        font-size: 15pt;
    `

    return (
        <Header>
            <Logo>
                <Link to={'/'}>
                    <h1>PrimeFlix</h1>
                </Link>
            </Logo>
            <ButtonFilme>
                <Link to={'/favorites'}>
                    <Paragrafo>Meus filmes</Paragrafo>
                </Link>
            </ButtonFilme>
        </Header>
    )
}

export default Header