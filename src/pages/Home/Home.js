import { useNavigate } from 'react-router-dom'
import Logo from '../../img/ninja.png'
import { Container, Botao } from './styled'


const Home = ()=>{
    const navigate = useNavigate()
    return(
        <Container>
            <h1>LabeNinjas</h1>
            <img src={`${Logo}`} alt='imgam de logo'/>
            <p><b>O talento certo no moment certo.</b></p>
            <Botao onClick={()=> navigate('/cadastro')}>Quero ser um ninja</Botao>
            <Botao onClick={()=> navigate('/lista')}>Contrar um ninja</Botao>
        </Container>
    )
}
export default Home