import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { IoIosArrowBack } from 'react-icons/io'
import { Container, BtnContainer, BtnCadastrar, Head } from './styled.js'



const Signup = ()=>{
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name:'',
        email:'',
        password:'',
        veryPass:''
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

    

    const signup = (e)=>{
        e.preventDefault()

        const body = {
            name: form.name,
            email: form.email,
            password: form.password,
            veryPass: form.veryPass
        }
        
        axios.post(`${BASE_URL}/signup`, body).then(res=>{
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
            <IoIosArrowBack onClick={()=> navigate('/')}
                style={{cursor:'pointer'}}/>
            Login
            <div/>
        </Head>
        <Container>
            <form onSubmit={signup}>
                <fieldset>
                    <legend>Preencha o formulário e cadastre-se</legend>
                    <input type='text' name='name' value={form.name} onChange={onChange}
                        placeholder='Seu nome ou empresa' autoFocus required/>
                    
                    <input type='text' name='email' value={form.email} onChange={onChange}
                        placeholder='nome@email.com' required/><br/>
                    
                    <input type='password' name='password' value={form.password} onChange={onChange}
                        placeholder='Sua senha' required/>
                    
                    <input type='password' name='veryPass' value={form.veryPass} onChange={onChange}
                        placeholder='Repita sua senha' required/>
                    
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
export default Signup