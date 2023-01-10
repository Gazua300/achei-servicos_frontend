import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { Container, BtnContainer, BtnCadastrar } from './styled'



const Cadastro = ()=>{
    const navigate = useNavigate()
    const [form, setForm] = useState({
        titulo:'',
        descricao:'',
        phone:''
    })


    const onChange = (e)=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }

    

    const cadastrar = (e)=>{
        e.preventDefault()

        const body = {
            title: form.titulo,
            description: form.descricao,
            phone: form.phone
        }
        if(form.pagamento === 'Pagamento'){
            alert('Selecione uma forma de pagamento.')
        }else if(form.prazo < new Date()){

        }else{
            axios.post(`${BASE_URL}/jobs`, body).then(res=>{
                alert(res.data)
                setForm({
                    titulo:'',
                    descricao:'',
                    phone:''
                })
            }).catch(e=>{
                alert(e.response.data)
            })
        }
    }
    
    return(
        <Container>
            <h2>Preencha o formulário com os dados do serviço</h2>
            <form onSubmit={cadastrar}>
                <input type='text' name='titulo' value={form.titulo} onChange={onChange}
                    placeholder='Nome do serviço' required/>
                <textarea name='descricao' value={form.descricao} onChange={onChange}
                    placeholder='Descricao' required/>
                <input type='tel' name='phone' value={form.phone} onChange={onChange}
                    placeholder='DDD e telefone' required/>
                <BtnContainer>
                    <BtnCadastrar>Cadastrar</BtnCadastrar>
                </BtnContainer>
            </form>
                <BtnCadastrar onClick={()=> navigate('/')}>Ir para lista</BtnCadastrar>
        </Container>
    )
}
export default Cadastro