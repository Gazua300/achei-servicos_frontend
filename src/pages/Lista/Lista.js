import { useContext } from "react"
import { useState } from "react"
import Context from "../../global/Context"
import { convertDate } from '../../utilidades/util'
import { 
    InputContainer,
    Cartao,
    BtnCartao,
    Nome,
    Container,
    CartaoContainer,
    Carregando
 } from "./styled"


const Lista = ()=>{
    const { states, setters, requests } = useContext(Context)
    const servicos = states.servicos
    const [minVal, setMinVal] = useState('')
    const [maxVal, setMaxVal] = useState('')
    const [titulo, setTitulo] = useState('')
    const [ordem, setOrdem] = useState('')

//Pegar valores dos inputs
    const pegarMinVal = (e)=>{
        setMinVal(e.target.value)
    }
    const pegarMaxVal = (e)=>{
        setMaxVal(e.target.value)
    }
    const pegarTitulo = (e)=>{
        setTitulo(e.target.value)
    }
    const pegarOrdem = (e)=>{
        setOrdem(e.target.value)
    }

//Filtrar servicos
    const filtro = servicos && servicos.filter(item=>{
        return minVal < item.price
    }).filter(item=>{
        return maxVal === '' || maxVal >= item.price
    }).filter(item=>{
        return titulo === '' || titulo.toLowerCase().includes(item.title.toLowerCase())
    }).sort((servicoAtual, proximo)=>{
        switch(ordem){
            case 'Título':
                return servicoAtual.title.localeCompare(proximo.title)
            case 'Preço':
                return servicoAtual.price - proximo.price
            case 'Prazo':
                return new Date(servicoAtual.dueDate).getTime() - 
                       new Date(proximo.dueDate).getTime() 
            default:
                return false
        }
    })
        

    return(
        <Container>
            <InputContainer>
                <h2>Filtro de busca</h2>
                <input type='number' min='1' value={minVal} onChange={pegarMinVal}
                    placeholder='Valor mínimo'/>
                <input type='number' min='1' value={maxVal} onChange={pegarMaxVal}
                    placeholder='Valor máximo'/>
                <input type='text' value={titulo} onChange={pegarTitulo}
                    placeholder='Título' />
                <select value={ordem} onChange={pegarOrdem}>
                    <option defaultChecked>Sem ordenação</option>
                    <option>Título</option>
                    <option>Preço</option>
                    <option>Prazo</option>
                </select>
            </InputContainer>
            <CartaoContainer>
            {filtro.length > 0 ? filtro.map(servico=>{
                return(
                    <Cartao key={servico.id}>
                        <Nome>{servico.title}</Nome>
                        <p><b>Preço: </b>R$ {servico.price}</p>
                        <b>Prazo: </b>{convertDate(servico.dueDate)}
                        <p><BtnCartao onClick={()=> requests.contratarServico(servico.id)}>Contratar</BtnCartao>&nbsp;&nbsp;
                        <BtnCartao onClick={()=> setters.adicionarAoCarrinho(servico)}>Adicionar ao carrinho</BtnCartao></p>
                    </Cartao>
                )
            }) : <Carregando></Carregando>}
            </CartaoContainer>  
        </Container>        
    )
}
export default Lista