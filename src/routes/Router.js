import { Routes, Route } from 'react-router-dom'
import Cadastro from '../pages/Cadastro/Cadastro'
import Lista from '../pages/Lista/Lista'
import Detalhe from '../pages/Detalhe/Detalhe'


const Router = ()=>{
    return(
        <Routes>
            <Route exact path='/' element={<Lista/>}/>
            <Route exact path='/cadastro' element={<Cadastro/>}/>
            <Route exact path='/detalhe' element={<Detalhe/>}/>
        </Routes>
    )
}
export default Router