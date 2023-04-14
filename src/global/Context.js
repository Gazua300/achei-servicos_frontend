import { createContext, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"


const Context = createContext()

export const GlobalState = (props)=>{
    const [servicos, setServicos] = useState([])
    const [job, setJob] = useState({})
    const [user, setUser] = useState({})
    const [subscription, setSubscription] = useState(null)
    
    


    const registForNotification = ()=>{
        navigator.serviceWorker.register('service-worker.js').then(async serviceWorker=>{
            let subscription = await serviceWorker.pushManager.getSubscription()

            if(!subscription){
                axios.get(`${BASE_URL}/public_key`, {
                    headers: { Authorization: localStorage.getItem('id') }
                }).then(async res=>{
                    console.log(res.data)
                    subscription = await serviceWorker.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: res.data
                    })
                }).catch(e=>{
                    alert(e)
                })

            }           
            
            setSubscription(subscription)

            axios({
                method:'POST',
                url:`${BASE_URL}/rgnotification`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('id')
                },
                data: subscription
            }).then(res=>{
                console.log(res.data)
            }).catch(e=>{
                console.log(e.response.data)
            })

            // sendNotification()
                                
        })
    }


    const sendNotification = ()=>{
        if(!subscription){
            registForNotification()
        }

        axios({
            method:'POST',
            url:`${BASE_URL}/send_notification`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('id')
            },
            data: subscription
        }).then(res=>{
            console.log(res.data)
        }).catch(e=>{
            alert(e.response.data)
        }) 
    }
   

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
    const requests = { getAllJobs, getProfile, registForNotification, sendNotification }



    return(
        <Context.Provider value={{ states, setters, requests }}>
            { props.children }
        </Context.Provider>
    )
}


export default Context