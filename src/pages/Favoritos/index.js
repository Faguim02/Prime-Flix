import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Favoritos = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    const myList = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(myList || []))
  },[])

  const Delete = (ID) => {
    let filtroFilme = filmes.filter((item)=>{
      return (item.id !== ID)
    })
    setFilmes(filtroFilme)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilme))
    toast.success("Filme deletado da lista com sucesso", {
      position: toast.POSITION.BOTTOM_LEFT
    })
  }

  const Favoritos = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap row;
    padding: 10px;
    color: white;
  `
  const AreaTitle = styled.section`
    display: flex;
    width: 100%;
    margin: 60px;
  `

  const Article = styled.article`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  width: 200px;
  height: 400px;
  `
  const Thumb = styled.img`
  object-fit: cover;
  width: 200px;
  height: 300px;
  `
  const Button = styled.button`
  background-color: #777777;
  color: white;
  width: 200px;
  padding: 12px;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: 0.5s;
  :hover{
      background-color: red;
      color: white;
  }
  `
  const ButtonDetais = styled.button`
  background-color: #777777;
  color: white;
  width: 200px;
  padding: 12px;
  border-radius: 0;
  cursor: pointer;
  transition: 0.5s;
  :hover{
      background-color: black;
      color: white;
  }
  `
  
  return (
    <Favoritos>
      <AreaTitle>
        <h1>Filmes favoritos</h1>
      </AreaTitle>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}
      {
        filmes.map((filme) => {
          return(
            <Article>
              
              <Thumb src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt='thumb'/>
              <Link to={`http://localhost:3000/filme/${filme.id}`}><ButtonDetais>Ver Detalhes</ButtonDetais></Link>
              <Button onClick={()=>{Delete(filme.id)}}>Excluir da lista</Button>
            </Article>
          )
        })
      }
    </Favoritos>
  )
}

export default Favoritos