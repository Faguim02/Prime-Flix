import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'
import Api from '../../services/Api'

import styled from 'styled-components'

const Filme = () => {

  const {id} = useParams()
  const Navigate = useNavigate()

  const [filme, setFilme] = useState({})
  const [carregado, setCarregado] = useState(false)

  useEffect(()=>{
    const loadFilme = async () => {
      await Api.get(`/movie/${id}`, {
        params:{
          api_key : '7341e6925a841d2d2309e6ddc3c9ca7c',
          language : 'pt-BR',
        }
      })
      .then(res => {
        setFilme(res.data)
        setCarregado(true)
      })
      .catch(err=>{
        Navigate('/', {replace: true})
      })
    }
    loadFilme()
  },[Navigate, id])

  const SalvarFilme = () => {
    const myList = localStorage.getItem("@primeflix")
    let FilmesSalvos = JSON.parse(myList) || []

    const hasFilme = FilmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
    if (hasFilme){
      toast.warn("Filme já está salvo!", {
        position: toast.POSITION.BOTTOM_LEFT
      })
      return
    }
    FilmesSalvos.push(filme)
    localStorage.setItem("@primeflix", JSON.stringify(FilmesSalvos))
    toast.success("Filme salvo com sucesso!", {
      position: toast.POSITION.BOTTOM_LEFT
    })
  }

  const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 25px;
  `
  const Thumb = styled.img`
    width: 350px;
    height: 500px;
    object-fit: contain;
  `
  const Separation = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: baseline;
    padding: 25px;
    height: 400px;
    width: 400px;
  `
  const Title = styled.h2`
    color: white;
  `
  const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  `
  const Paragrafo = styled.p`
    color: #d4d4d4;
  `
  const Pergunta = styled.strong`
    color: white;
  `
  const Resposta = styled.p`
    color: #d4d4d4;
  `
  const Button = styled.a`
    background-color: #777777;
    color: white;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    :hover{
      background-color: black;
      color: white;
    }
  `

  if(carregado){
    return(
      <Main>
        <Thumb src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt='thumb'/>
        <Separation>
          <Title>{filme.title}</Title>
          <Paragrafo>{filme.overview}</Paragrafo>
          <Info>
            <Pergunta>Data de lançamento:</Pergunta>
            <Resposta>{filme.release_date}</Resposta>
          </Info>
          <Info>
            <Pergunta>Popularidade:</Pergunta>
            <Resposta>{filme.popularity}</Resposta>
          </Info>
          <Info>
            <Pergunta>Classificações:</Pergunta>
            <Resposta>{filme.vote_average}</Resposta>
          </Info>
          <Info>
            <Button onClick={SalvarFilme}>Salvar</Button>
            <Button target='_blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</Button>
          </Info>
        </Separation>
      </Main>
    )
  }
  return <Loading/>
}

export default Filme