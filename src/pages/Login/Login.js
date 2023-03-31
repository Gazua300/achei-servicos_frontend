import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { Container, BtnContainer, BtnCadastrar, Head } from './styled'



const Login = ()=>{
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email:'',
        password:''
    })


    useEffect(()=>{
        const token = localStorage.getItem('id')

        if(token){
            navigate('/lista')
        }
    }, [])



    const onChange = (e)=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }

    

    const login = (e)=>{
        e.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(`${BASE_URL}/login`, body).then(res=>{
            localStorage.setItem('id', res.data)
            navigate('/lista')
            setForm({
                email:'',
                password:''
            })
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const limpar = ()=>{
        setForm({
            email:'',
            password:''
        })
    }
  
    
    
    return(
        <>
        <Head>
            Login
        </Head>
        <Container>
            <form onSubmit={login}>
                <fieldset>
                    <legend>Entre com email e senha</legend>
                    <input type='text' name='email' value={form.email} onChange={onChange}
                        placeholder='nome@email.com' required/><br/>
                    <input type='password' name='password' value={form.password} onChange={onChange}
                        placeholder='Sua senha' required/>
                    <BtnContainer>
                        <BtnCadastrar type='button' onClick={limpar} value='Limpar'/>
                        <BtnCadastrar type='submit' value='Entrar' />
                    </BtnContainer>
                </fieldset>
            </form>
        </Container>
        </>
    )
}
export default Login