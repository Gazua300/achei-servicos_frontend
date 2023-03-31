import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Lista from '../pages/Lista/Lista'
import Detalhe from '../pages/Detalhe/Detalhe'
import Perfil from '../pages/Perfil/Perfil'
import Signup from '../pages/Signup/Signup'



const Router = ()=>{
    return(
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/lista' element={<Lista/>}/>
            <Route exact path='/cadastro' element={<Cadastro/>}/>
            <Route exact path='/detalhe' element={<Detalhe/>}/>
            <Route exact path='/perfil' element={<Perfil/>}/>
        </Routes>
    )
}
export default Router