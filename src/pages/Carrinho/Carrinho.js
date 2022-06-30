import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../../global/Context"
import {QuadroCarro, Remove, QuadroFinal, BtnContainer} from './styled'


const Carrinho = ()=>{
    const navigate = useNavigate()
    const { states, setters, requests} = useContext(Context)
    const carro = states.carrinho
    console.log(carro)


    let total = 0
    carro.forEach(item=>{
        total += item.price
    })

    return(
        <>
            { carro && carro.map(item=>{
                return(
                    <QuadroCarro>
                        <b>{item.title}</b>
                        R$ {item.price.toFixed(2)}
                        <BtnContainer>
                            <Remove onClick={()=> requests.contratarServico(item.id)}>Contratar</Remove>
                            <Remove onClick={()=> setters.removerDoCarrinho(item.id)}>Remover</Remove>
                        </BtnContainer>
                    </QuadroCarro>
                )
            }) }
            <QuadroFinal>
                <b>Total: R$ {total.toFixed(2)}</b>
                <Remove onClick={setters.limparCarrinho}>Limpar carrinho</Remove>
                <Remove onClick={()=> navigate(-1)}>Voltar</Remove>
            </QuadroFinal>
        </>
    )
}
export default Carrinho