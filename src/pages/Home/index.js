import React, {useEffect, useState} from 'react'
import Api from '../../services/Api'
import styled from 'styled-components'
import FilmeComponent from '../../components/FilmeComponent'
import Loading from '../../components/Loading'

const Home = () => {

  const [filmes, setFilmes] = useState([])
  const [page, setPage] = useState()

  useEffect(()=>{
    const loadFilmes = async() => {
      const res = await Api.get('movie/now_playing', {
        params : {
          api_key : '7341e6925a841d2d2309e6ddc3c9ca7c',
          language : 'pt-BR',
          page : 1
        }
      })
      setFilmes(res.data.results)
    }
    loadFilmes()
  },[])

  const Home = styled.main`
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    padding: 15px;
  `

  return (
    <Home>
      {filmes.length === 0 ? <Loading/> : filmes.map((filme)=>{
        return(
          <FilmeComponent 
            key={filme.id}
            thumb={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
            id={filme.id}
          />
        )
      })}
    </Home>
  )
}

export default Home