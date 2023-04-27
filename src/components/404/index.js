import img from '../../resource/404.svg'
import styled from 'styled-components'

const Err404 = () => {

    const Main = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    `
    const Image = styled.img`
        width: 400px;
    `

    return (
        <Main>
            <Image src={img} alt='err'/>
        </Main>
    )
}

export default Err404