import { useState, useContext } from 'react'
import Context from '../../global/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { Container, BtnContainer, BtnCadastrar, Head } from './styled'



const Cadastro = ()=>{
    const { requests } = useContext(Context)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        titulo:'',
        descricao:'',
        phone:'',
        period:''
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
            phone: form.phone,
            period: form.period
        }
        axios.post(`${BASE_URL}/jobs`, body).then(()=>{
            requests.getAllJobs()
            navigate('/')
            setForm({
                titulo:'',
                descricao:'',
                phone:''
            })
        }).catch(e=>{
            alert(e.response.data)
        })
    }
  
    
    console.log(form)
    return(
        <>
        <Head>
            <button onClick={()=> navigate(-1)}>
                <b>Voltar</b>
            </button>
            Cadastrar Serviço
            <button onClick={()=> navigate('/')}>
                <b>Lista</b>
            </button>
        </Head>
        <Container>
            <h2>Preencha o formulário com os dados do serviço</h2>
            <form onSubmit={cadastrar}>
                <input type='text' name='titulo' value={form.titulo} onChange={onChange}
                    placeholder='Nome do serviço' required/>
                <textarea name='descricao' value={form.descricao} onChange={onChange}
                    placeholder='Descricao' required/>
                <input type='tel' name='phone' value={form.phone} onChange={onChange}
                    placeholder='DDD e telefone' required/>
                <input type='text' name='period' value={form.period} onChange={onChange}
                    placeholder='Período de atendimento' required/>
                <BtnContainer>
                    <BtnCadastrar>Cadastrar</BtnCadastrar>
                </BtnContainer>
            </form>
                <BtnCadastrar onClick={()=> navigate('/')}>Ir para lista</BtnCadastrar>
        </Container>
        </>
    )
}
export default Cadastro