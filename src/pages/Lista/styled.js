import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    padding-top: 10vh;
    margin: 0;

    button {
        background-color: #151626;
        color: whitesmoke;
        padding: 7px;
        border-radius: 20px;
        margin-top: 5vh;
        cursor: pointer;
    }
`
export const InputContainer = styled.div`
    box-shadow: 2px 2px 4px whitesmoke;
    border: 1px solid whitesmoke;
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

    input::placeholder{
        color: whitesmoke;
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

    .subtitle-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
    }    
`
export const CartaoContainer = styled.div`
    margin-top: 30px;
`
export const Cartao = styled.div`
    width: 25%;
    display: inline-block;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    box-shadow: 2px 2px 4px whitesmoke; 
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    &:hover{
    transform: scale(1.1);
    transition: 1s;
    }

    .card-content {
        text-align: left;
        margin-bottom: 20px;
    }
`
export const Nome = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`
export const BtnCartao = styled.button`
    border-radius: 20px;
    padding: 7px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
`
