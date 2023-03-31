import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../../global/Context"
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { BsSearch } from 'react-icons/bs'
import { 
    InputContainer,
    Cartao,
    BtnCartao,
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
                <div style={{position:'relative'}}>
                    <input type='text' onChange={handleTitle} value={title} 
                        placeholder='Titulo do serviço'/>
                    <BsSearch className="search-icon"/>                    
                </div>                
            </InputContainer>
            <CartaoContainer>
            {filtro && filtro.map(servico=>{
                return(
                    <Cartao key={servico.id}
                        onClick={()=> getJobById(servico)}>
                        <Nome>{servico.title}</Nome>
                        <div className="card-content">
                            {servico.description}<br/><br/>
                            {servico.phone}<br/><br/>
                            {servico.period}
                        </div>
                        <BtnCartao onClick={()=> getJobById(servico)}>
                            Entrar em contato
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