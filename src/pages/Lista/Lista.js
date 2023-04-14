import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../../global/Context"
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { convertPhone } from "../../components/ConvertPhone"
import { 
    InputContainer,
    Cartao,
    Nome,
    Container,
    CartaoContainer,
 } from "./styled"

 

const Lista = ()=>{
    const navigate = useNavigate()
    const { states, setters, requests } = useContext(Context)
    const servicos = states.servicos
    const [title, setTtile] = useState('')



    useEffect(()=>{
        if(!localStorage.getItem('id')){
            navigate('/')
        }
        requests.getAllJobs()
        
    }, [])
    

    const handleTitle = (e)=>{
        setTtile(e.target.value)
    }


    const getJobById = (job)=>{
        axios.get(`${BASE_URL}/job/${job.id}`, {
            headers: {
                Authorization: localStorage.getItem('id')
            }
        }).then(res=>{
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
        <Container>
            <InputContainer>
                <input type='text' onChange={handleTitle} value={title} 
                    placeholder='Titulo do serviço                  🔎'/>                 
            </InputContainer>
            <CartaoContainer>
            {filtro && filtro.map(servico=>{
                return(
                    <Cartao key={servico.id}>
                        <Nome>{servico.title}</Nome>
                        <div className="card-content">
                            <b>Descrição: </b>{servico.description}<br/><br/>
                            <b>Contato: </b>{convertPhone(servico.phone)}<br/><br/>
                            <b>Horário de atendimento: </b>{servico.period}
                        </div>
                        <button className="btn btn-primary"
                            onClick={()=> getJobById(servico)}>
                            Entrar em contato
                        </button>
                    </Cartao>
                )
            })}
            </CartaoContainer>  
        </Container>  
        </>      
    )
}
export default Lista