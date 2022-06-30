import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    margin-top: 20px;
`
export const InputContainer = styled.div`
    box-shadow: 2px 2px 4px #918bcb;
    border: 1px solid;
    border-radius: 10px;
    width: 84vw;
    margin: auto;
    h2{
        text-align: center;
    }
    input{
        width: 170px;
        height: 20px;
        background: transparent;
        color: whitesmoke;
        font-size: 1rem;
        border-radius: 10px;
        margin: 10px;
        padding-left: 10px;
    }
    select{
        margin-left: 10px;
        height: 25px;
        background: transparent;
        border-radius: 10px;
        color: gray;
        padding-left: 10px;
        font-size: 1rem;
        option{
            color: black;
        }
    }
`
export const CartaoContainer = styled.div`
    margin-top: 30px;
`
export const Cartao = styled.div`
    text-align: left;
    color: black;
    border: 1px solid;
    box-shadow: 2px 2px 4px #918bcb;    
    width: 230px;
    display: inline-block;
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    &:hover{
    transform: scale(1.1);
    transition: 1s;
    }
`
export const Nome = styled.div`
    text-align: center;
    font-size: 14pt;
    font-weight: bold;
`
export const BtnCartao = styled.button`
    border-radius: 20px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
`
export const Carregando = styled.div`
    margin: auto;
    border: 2px solid #918bcb;
    border-top: none;
    width: 100px;
    height: 100px;
    box-shadow: 1px 1px 2px #918bcb;
    border-radius: 50%;
    animation: loading 0.8s infinite;

    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
        
    }
`
