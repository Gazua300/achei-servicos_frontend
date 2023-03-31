import { createContext, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"


const Context = createContext()

export const GlobalState = (props)=>{
    const [servicos, setServicos] = useState([])
    const [job, setJob] = useState({})
    const [user, setUser] = useState({})


   
    

    const getAllJobs = ()=>{
        axios.get(`${BASE_URL}/jobs`, {
            headers: {
                Authorization: localStorage.getItem('id')
            }
        }).then(res=>{
            setServicos(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const getProfile = ()=>{
        axios.get(`${BASE_URL}/user`, {
            headers: {
                Authorization: localStorage.getItem('id')
            }
        }).then(res=>{
            setUser(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const states = { servicos, job, user }
    const setters = { setJob }
    const requests = { getAllJobs, getProfile }



    return(
        <Context.Provider value={{ states, setters, requests }}>
            { props.children }
        </Context.Provider>
    )
}


export default Context