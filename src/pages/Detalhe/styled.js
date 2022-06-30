import styled from 'styled-components'


export const Container = styled.div`    
    color: black;
    margin-top: 10vh;

    .form-container{
        
    }
    .forms-consulta{
        display: flex;
        align-items: center;
        justify-content: center;
    }    
    form{
        margin: 20px;
    }
    fieldset{
        width: 27vw;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 4px #918bcb;
        legend{
            text-align: center;
            font-size: 1.3rem;
        }
    }
    input{
        background: transparent;
        height: 20px;
        font-size: 1rem;
        color: whitesmoke;
        border-radius: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
    }
    select{
        background: transparent;
        width: 216px;
        height: 25px;
        font-size: 1rem;
        border-radius: 10px;
        padding-left: 10px;
        color: gray;
        option{
            color: black;
        }
    }    
`
export const Voltar = styled.button`
    height: 40px;
    width: 100px;
    border-radius: 30px;
    background-color: #151626;
    color: whitesmoke; 
    cursor: pointer;
    font-size: 12pt;
    margin-top: 10px;
`
export const DetalheCard = styled.div`
    margin: auto;
    box-shadow: 2px 2px 4px #918bcb;
    border: 1px solid;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
`
export const Titulo = styled.h1`
    text-align: center;
`
export const DivBtn = styled.div`
    text-align: center;
    padding: 15px;
`
export const Contratar = styled.button`
    background-color: #151626;
    border-radius: 10px;
    margin-top: 20px;
    color: whitesmoke;
    cursor: pointer;
    padding: 5px;
`
export const Paragrafo = styled.p`
    display: none;
`
export const ConsultaEmail = styled.div`
    display: none;
    margin: 20px;
    table{
        border: 1px solid whitesmoke;
        color: whitesmoke;
        margin: auto;
    }
    th{
        padding: 5px;
    }
    td{
        padding: 5px;
    }
`
export const ConstultaId = styled.div`
    display: none;
    margin: 20px;
    table{
        border: 1px solid whitesmoke;
        color: whitesmoke;
        margin: auto;
    }
    th{
        padding: 5px;
    }
    td{
        padding: 5px;
    }
`
