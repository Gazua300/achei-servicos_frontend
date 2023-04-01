import { useContext, useEffect, useState } from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { useNavigate } from 'react-router-dom'
import DefaultHeader from '../../components/Header'
import { AiOutlineLogout } from 'react-icons/ai'
import { BsCardList } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { 
    Container,
    Cartao,
    Search
 } from './styled'


const Perfil = ()=>{
    const navigate = useNavigate()
    const { states, setters, requests } = useContext(Context)
    const user = states.user
    const [servicos, setServicos] = useState([])
    const [titulo, setTitulo] = useState('')
    

  

    useEffect(()=>{
        if(!localStorage.getItem('id')){
            navigate('/')
        }

        userJobs()
        requests.getProfile()
    }, [])




    const userJobs = ()=>{
        axios.get(`${BASE_URL}/userjobs`, {
            headers: {
                Authorization: localStorage.getItem('id')
            }
        }).then(res=>{
            setServicos(res.data)
        }).catch(e=>{
            alert(e)
        })
    }


    const filtro = servicos && servicos.filter(item=>{
        return item.title.toLowerCase().includes(titulo.toLowerCase())
    })


    const comMouse = (id)=>{
        document.getElementById(id).style.color = 'red'
    }

    const semMouse = (id)=>{
        document.getElementById(id).style.color = 'whitesmoke'
    }


    const deleteServico = (servico)=>{      
        const confirmar = window.confirm(`Tem certeza que deseja excluir ${servico.title}?`)

        if(confirmar){
            axios.delete(`${BASE_URL}/job/${servico.id}`, {
                headers: {
                    Authorization: localStorage.getItem('id')
                }
            }).then(()=>{
                userJobs()
            }).catch(e=>{
                alert(e.response.data)
            })
        }
    }


    const logout = ()=>{
        const confirmar = window.confirm('Deseja deslogar da sua conta?')

        if(confirmar){
            localStorage.clear()
            navigate('/')
        }
    }




    
    return(
        <>
        <DefaultHeader
            leftIcon={<BsCardList onClick={()=> navigate('/lista')} style={{cursor:'pointer'}}/>}
            title='Perfil'
            rightIcon={<AiOutlineLogout onClick={logout} style={{cursor:'pointer', marginRight:5}}/>}
        />
        <Container>
           <div style={{textAlign:'start', marginLeft:20, marginTop:30}}>
                <b>Nome: </b>{user.name}<br/>
                <b>Email: </b>{user.email}
           </div>
           <div style={{marginTop:'10%', fontSize:25}}>
                Serviços cadastrados
           </div>           
           <div style={{border:'1px solid', margin:20}}/>
           <div style={{position:'relative'}}>
                <Search placeholder='Título do serviço' className='input-search'
                    type='text'
                    value={titulo}
                    onChange={(e)=> setTitulo(e.target.value)}/>
                <BsSearch className='search-icon'/>
           </div>
           <div style={{overflow:'auto'}} >
                {filtro.length > 0 ? (
                    filtro.map(servico=>{
                        return(
                            <Cartao key={servico.id}>
                                <div onClick={()=>{
                                    setters.setJob(servico)
                                    navigate('/detalhe')
                                }} 
                                    style={{cursor:'pointer'}}>
                                    {servico.title}
                                </div>
                                <MdDelete style={{fontSize:20, cursor:'pointer', color:'whitesmoke'}}
                                    id={servico.id}
                                    onMouseOver={()=> comMouse(servico.id)}
                                    onMouseOut={()=> semMouse(servico.id )}
                                    onClick={()=> deleteServico(servico)} />
                            </Cartao>
                        )
                    })        
                ) : null}
            </div>
        </Container>
        </>
    )
}
export default Perfil