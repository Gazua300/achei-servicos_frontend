import { useState, useContext, useEffect } from 'react'
import Context from '../../global/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { BsCardList, BsFillPersonFill } from 'react-icons/bs'
import DefaultHeader from '../../components/Header'
import { Container, BtnContainer } from './styled'



const Cadastro = ()=>{
    const { requests } = useContext(Context)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        titulo:'',
        descricao:'',
        phone:'',
        period:''
    })


    useEffect(()=>{
        if(!localStorage.getItem('id')){
            navigate('/')
        }
    }, [])


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
        axios({
            method:'POST',
            url:`${BASE_URL}/jobs`,
            headers: {
                Authorization: localStorage.getItem('id')
            },
            data: body
        }).then(()=>{
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
  
    
    
    return(
        <>
        <DefaultHeader
            leftIcon={<BsCardList onClick={()=> navigate('/lista')} style={{cursor:'pointer'}}/>}
            title='Cadastrar Serviço'
            rightIcon={<BsFillPersonFill onClick={()=> navigate('/perfil')} style={{cursor:'pointer'}}/>}/>
        <Container>
            <form onSubmit={cadastrar}>
                <fieldset>
                    <input type='text' name='titulo' value={form.titulo} onChange={onChange}
                        placeholder='Nome do serviço' required/>
                    <textarea name='descricao' value={form.descricao} onChange={onChange}
                        placeholder='Descricao' required/>
                    <input type='tel' name='phone' value={form.phone} onChange={onChange}
                        placeholder='DDD e telefone' required/>
                    <input type='text' name='period' value={form.period} onChange={onChange}
                        placeholder='Período de atendimento' required/>
                    <BtnContainer>
                        <button className='btn btn-primary'>Cadastrar</button>
                        <input type='button' className='btn btn-primary' onClick={()=> navigate('/')} value='Lista'/>
                    </BtnContainer>
                </fieldset>
            </form>
        </Container>
        </>
    )
}
export default Cadastro