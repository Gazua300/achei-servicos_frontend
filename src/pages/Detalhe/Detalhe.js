import { useContext, useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Context from '../../global/Context'
import { BASE_URL } from '../../constants/urls'
import { 
    Container,
    Voltar,
    DetalheCard,
    Titulo,
    DivBtn,
    Contratar,
    Paragrafo,
    ConsultaEmail,
    ConstultaId
 } from './styled'


const Detalhe = ()=>{
    const { states } = useContext(Context)
    const servico = states.servico
    const navigate = useNavigate()
    const resultado = useRef(null)
    const consulta = useRef(null)
    const consultaPorId = useRef(null)
    const [jobId, setJobId] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [servicos, setServicos] = useState([])  
    const [servicoId, setServicoId] = useState({})  
    const [form, setForm] = useState({
        name:'',
        email:'',
        payment:''
    })

    const onChange = (e)=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handleId = (e)=>{
        setId(e.target.value)
    }


    
    const contratarServico = (e)=>{
        e.preventDefault()

        if(form.payment === 'Pagamento'){
            alert('Selecione uma forma de pagamento.')
        }else{
            const body = {
                name: form.name,
                email: form.email,
                payment: form.payment,
                job: servico.title
            }
            axios.post(`${BASE_URL}/job`, body).then(res=>{
                setJobId(res.data)
                alert(`${servico.title} contratado.`)
                resultado.current.style.display = 'block'        
            }).catch(e=>{
                alert(e.response.data)
            })
        }

    }

    const consultarServico = (e)=>{
        e.preventDefault()

        const body = {
            email
        }
        axios.post(`${BASE_URL}/hired`, body).then(res=>{
            setServicos(res.data)
            consulta.current.style.display = 'block'
        }).catch(e=>{
            alert(e.response.data)
        })
    }

    const servicoPorId = (e)=>{
        e.preventDefault()

        axios.get(`${BASE_URL}/hired/${id}`).then(res=>{
            setServicoId(res.data)
            consultaPorId.current.style.display = 'block'
        }).catch(e=>{
            alert(e.response.data)
        })
    }
    console.log(servicos)


    return(
        <Container>
            <DetalheCard>
                <Titulo>{servico.title}</Titulo>
                <p><b>Descrição: </b>{servico.description}</p>
                <b>Preço: </b>R$ {servico.price}.00
                <p><b>Prazo: </b> {servico.dueDate}</p>
                <b>Formas de pagamento: </b>{servico.payment}
            </DetalheCard>
            <div className='form-container'>
                <div className='forms-consulta'>
                    <form onSubmit={contratarServico}>
                        <fieldset>
                            <legend>Contrar serviço</legend>
                            <input type='text' name='name' value={form.name} onChange={onChange}
                                placeholder='Nome' required/><br/>
                            <input type='email' name='email' value={form.email} onChange={onChange}
                                placeholder='nome@email.com' required/><br/>
                            <select name='payment' value={form.payment} onChange={onChange} required>
                                <option defaultChecked>Pagamento</option>
                                <option>Débito</option>
                                <option>Crédito</option>
                                <option>Pix</option>
                                <option>Boleto</option>
                            </select>
                        <Contratar>Contratar</Contratar>
                        <Paragrafo ref={resultado} style={{color:'whitesmoke'}}>Anote a identificação do serviço contratado:<br/>{jobId}</Paragrafo>
                        </fieldset>
                    </form>                
                    <form onSubmit={consultarServico}>
                        <fieldset>
                            <legend>Consultar serviços contratados</legend>
                            <input type='email' value={email} onChange={handleEmail}
                            placeholder='Email do contratante' required/>
                            <Contratar>Consultar</Contratar>
                        </fieldset>
                    </form>
                </div>
                <form style={{position:'relative', left:'50%', transform:'translateX(-17%)'}}
                    onSubmit={servicoPorId}>
                    <fieldset>
                        <legend>Consultar serviço por identificador</legend>
                        <input type='text' value={id} onChange={handleId}
                            placeholder='Identificador'/>
                            <Contratar>Consultar</Contratar>
                    </fieldset>
                </form>
            </div>
            <ConsultaEmail ref={consulta}>
                <table border='1'>
                <th>Consulta por email
                    <tr>
                        <td>Serviço</td>
                        <td>Contratante</td>
                        <td>Forma de pagamento</td>
                        <td>Data de contratação</td>
                    </tr>
                    {servicos && servicos.map(servico=>{
                        return(
                            <tr key={servico.id}>
                                <td>{servico.job}</td>
                                <td>{servico.name}</td>
                                <td>{servico.payment}</td>
                                <td>{servico.date}</td>
                            </tr>
                        )
                    })}
                </th>
                </table>
            </ConsultaEmail>
            <ConstultaId ref={consultaPorId}>
                <table border='1'>
                <th>Constulta por id
                    <tr>
                        <td>Serviço</td>
                        <td>Contratante</td>
                        <td>Email</td>
                        <td>Forma de pagamento</td>
                        <td>Data de contratação</td>
                    </tr>
                    <tr>
                        <td>{servicoId.job}</td>
                        <td>{servicoId.name}</td>
                        <td>{servicoId.email}</td>
                        <td>{servicoId.payment}</td>
                        <td>{servicoId.date}</td>
                    </tr>
                </th>
                </table>
            </ConstultaId>
            <DivBtn>
                <Voltar onClick={()=> navigate(-1)}>Voltar</Voltar>
            </DivBtn>
        </Container>
    )
}
export default Detalhe