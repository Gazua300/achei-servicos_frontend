import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../../global/Context"
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { 
    InputContainer,
    Cartao,
    BtnCartao,
    Nome,
    Container,
    CartaoContainer,
    Head
 } from "./styled"


const Lista = ()=>{
    const navigate = useNavigate()
    const { states, setters } = useContext(Context)
    const servicos = states.servicos
    const [title, setTtile] = useState('')
    

    const handleTitle = (e)=>{
        setTtile(e.target.value)
    }


    const getJobById = (job)=>{
        axios.get(`${BASE_URL}/job/${job.id}`).then(res=>{
          setters.setJob(res.data)
          navigate('/detalhe')
        }).catch(e=>{
          alert(e.response.data)
        })
      }
    

    const filtro = servicos && servicos.filter(item=>{
        return item.title.toLowerCase().includes(title.toLocaleLowerCase())
    })
        

    return(
        <>
        <Head>
            <button onClick={()=> navigate(-1)}>
                <b>Voltar</b>
            </button>
            Lista de Serviços
            <button onClick={()=> navigate('/cadastro')}>
                <b>Cadastro</b>
            </button>
        </Head>
        <Container>
            <InputContainer>
                <h2>Filtro de busca</h2>
                <div className="subtitle-container">
                    <input type='text' onChange={handleTitle} value={title} 
                        placeholder='Titulo do serviço'/>                    
                </div>                
            </InputContainer>
            <CartaoContainer>
            {filtro && filtro.map(servico=>{
                return(
                    <Cartao key={servico.id}>
                        <Nome>{servico.title}</Nome>
                        <div className="card-content">
                            {servico.description}<br/><br/>
                            {servico.phone}<br/><br/>
                            {servico.period}
                        </div>
                        <BtnCartao onClick={()=> getJobById(servico)}>
                            Adicionar aos contatos
                        </BtnCartao>
                    </Cartao>
                )
            })}
            </CartaoContainer>  
        </Container>  
        </>      
    )
}
export default Lista