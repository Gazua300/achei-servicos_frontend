import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Cadastro from '../pages/Cadastro/Cadastro'
import Lista from '../pages/Lista/Lista'
import Carrinho from '../pages/Carrinho/Carrinho'
import Detalhe from '../pages/Detalhe/Detalhe'


const Router = ()=>{
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cadastro' element={<Cadastro/>}/>
            <Route exact path='/lista' element={<Lista/>}/>
            <Route exact path='/carrinho' element={<Carrinho/>}/>
            <Route exact path='/detalhe' element={<Detalhe/>}/>
        </Routes>
    )
}
export default Router