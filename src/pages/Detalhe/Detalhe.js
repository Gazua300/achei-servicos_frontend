import { useContext, useEffect, useState } from 'react'
import Context from '../../global/Context'
// import axios from 'axios'
// import { BASE_URL } from "../../constants/urls"
import DefaultHeader from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { IoAddCircleOutline } from 'react-icons/io5'
import { IoIosArrowBack, IoLogoWhatsapp } from 'react-icons/io'
import { 
    Container,
    Cartao,
    Nome,
    // CartaoContainer
 } from './styled'



 

const Detalhe = ()=>{
    const navigate = useNavigate()
    const { states, requests } = useContext(Context)
    const servico = states.job
    // const user = states.user
    // const [image, setImage] = useState(null)
    // const [images, setImages] = useState([])
    // const [match, setMatch] = useState(false)
    const message = `Olá, vi seu serviço anunciado no aplicativo Loja de Serviços e gostaria de contratá-lo`

   


    useEffect(()=>{
        if(!localStorage.getItem('id')){
            navigate('/')
        }
    }, [])


    useEffect(()=>{
        // axios.get(`${BASE_URL}/image/${servico.id}`, {
        //     headers: {
        //         Authorization: localStorage.getItem('id')
        //     }
        // }).then(res=>{
        //     setImages(res.data)
        // }).catch(e=>{
        //     console.log(e.response.data)
        // })

        requests.getProfile()

        // user.id === servico.provider ? setMatch(true) : setMatch(false)

    }, [])



    // const getAndSendImage = (e)=>{
    //     const imageFile = e.target.files[0]
    //     const reader = new FileReader()

    //     reader.onload = ()=>{
    //         setImage(reader.result)
    //     }

    //     reader.readAsDataURL(imageFile)

    //     const formData = new FormData()
    //     formData.append('image', imageFile)
    //     formData.append('imageName', imageFile.name)

    //     axios.post(`${BASE_URL}/image/${servico.id}`, formData, {
    //         headers: {
    //             Authorization: localStorage.getItem('id'),
    //             'Content-Type': 'multipart/form-data'                
    //         }
    //     }).then(res=>{
    //         alert(res.data)
    //     }).catch(e=>{
    //         alert(e.response.data)
    //     })
    // }



    
    return(
        <>
        <DefaultHeader
            leftIcon={<IoIosArrowBack onClick={()=> navigate(-1)} style={{cursor:'pointer'}}/>}
            title={servico.title}
            rightIcon={<IoAddCircleOutline onClick={()=> navigate('/cadastro')} style={{cursor:'pointer', marginRight:5}}/>}
        />
        <Container>
            <Cartao>
                <Nome>{servico.title}</Nome>
                <div className="card-content">
                    {servico.description}<br/><br/>
                    {servico.phone}<br/><br/>
                    {servico.period}
                </div>
                <a href={`https://api.whatsapp.com/send?phone=55${servico.phone}&text=${message}`} target='_blank'>
                    <IoLogoWhatsapp style={{
                        color:'#25D366',
                        cursor:'pointer',
                        fontSize:'2rem',
                    }}/>
                </a>
            </Cartao><br/>
            {/* {match ? (
                <>
                <label htmlFor='fileInput' className='select-image'>
                    Adicionar imagem
                </label>
                <input style={{display:'none'}}
                    id='fileInput' 
                    type='file'
                    onChange={getAndSendImage}/>
                </>
            ) : null } */}

            {/* <CartaoContainer>
                {images.length > 0 ? (
                    images.map(image=>{
                        return(
                            <img src={image.imageSrc} className='picture'/>
                            )
                        })
                    ) : null}
            </CartaoContainer> */}
        </Container>
        </>
    )
}
export default Detalhe