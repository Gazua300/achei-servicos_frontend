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
        preco:'',
        pagamento:'',
        prazo:''
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
            price: form.preco,
            payment: form.pagamento,
            dueDate: form.prazo
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
                    preco:'',
                    pagamento:'',
                    prazo:''
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
                    placeholder='Descricao' />
                <input type='number' name='preco' value={form.preco} onChange={onChange}
                    step='0.01' placeholder='R$ 0,00' required/>
                <input type='date' name='prazo' value={form.prazo} onChange={onChange}
                    required/>
                <select name='pagamento' value={form.pagamento} onChange={onChange}
                    required>
                    <option defaultChecked>Pagamento</option>
                    <option>Débito</option>
                    <option>Crédito</option>
                    <option>Pix</option>
                    <option>Boleto</option>
                </select>
                <BtnContainer>
                    <BtnCadastrar>Cadastrar</BtnCadastrar>
                </BtnContainer>
            </form>
                <BtnCadastrar onClick={()=> navigate('/lista')}>Ir para lista</BtnCadastrar>
        </Container>
    )
}
export default Cadastro