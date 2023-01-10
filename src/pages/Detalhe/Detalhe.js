import { useContext } from 'react'
import Context from '../../global/Context'
import { useNavigate } from 'react-router-dom'
import { 
    Container,
    Cartao,
    Nome,
    Head
 } from './styled'


const Detalhe = ()=>{
    const navigate = useNavigate()
    const { states } = useContext(Context)
    const servico = states.job
    const message = `Olá, vi seu serviço anunciado no aplicativo Loja de Serviços e gostaria de contratá-lo`



    
    return(
        <>
        <Head>
            <button onClick={()=> navigate(-1)}>
                Voltar
            </button>
            {servico.title}
            <div/>
        </Head>
        <Container>
            <Cartao>
                <Nome>{servico.title}</Nome>
                <div className="card-content">
                    {servico.description}<br/><br/>
                    {servico.phone}<br/><br/>
                    {servico.period}
                </div>
                <a href={`https://api.whatsapp.com/send?phone=55${servico.phone}&text=${message}`} target='_blank'>
                    Conversar com o prestador
                </a>
            </Cartao>
        </Container>
        </>
    )
}
export default Detalhe