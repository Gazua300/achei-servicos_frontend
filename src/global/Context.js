import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"


const Context = createContext()

export const GlobalState = (props)=>{
    const [servicos, setServicos] = useState([])
    const [job, setJob] = useState({})

    

    useEffect(()=>{
        getAllJobs()
    }, [])


    const getAllJobs = ()=>{
        axios.get(`${BASE_URL}/jobs`).then(res=>{
            setServicos(res.data)
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    const states = { servicos, job }
    const setters = { setJob }
    const requests = { getAllJobs }

    return(
        <Context.Provider value={{ states, setters, requests }}>
            { props.children }
        </Context.Provider>
    )
}


export default Context