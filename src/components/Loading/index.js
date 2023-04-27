import React from 'react'
import '../../index.css'

const Loading = () => {
  return (
    <section className='loading'>
        <div className='circle'>
            <div className='circles'></div>
            <div className='circles'></div>
            <div className='circles'></div>
            <div className='circles'></div>
        </div>
        <p>Carregando Dados...</p>
    </section>
  )
}

export default Loading