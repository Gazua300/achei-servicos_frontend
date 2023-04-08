import styled from 'styled-components'




export const Container = styled.div`
    text-align: center;
    padding-top: 3vh;
    margin: 0;

    button {
        background-color: blue;
        color: whitesmoke;
        padding: 7px;
        border-radius: 20px;
        margin-top: 10px;
        cursor: pointer;
    }
`
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    @media(max-width: 600px){
        margin-top: -30px;
        font-size: 10px;
    }

    h2{
        text-align: center;
    }

    input{
        width: 250px;
        height: 30px;
        background: transparent;
        color: whitesmoke;
        font-size: 1rem;
        border-radius: 20px;
        margin: 10px;
        padding-left: 40px;
    }

    .search-icon{
        position: absolute;
        left: 7.5%;
        top: 20.5px;
        color: rgba(255, 255, 255, 0.5)
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
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`
export const Cartao = styled.div`
    color: whitesmoke;
    border: 1px solid whitesmoke;
    box-shadow: 2px 2px 4px whitesmoke; 
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        color: goldenrod;
        border: 3px dashed goldenrod;
        box-shadow: 2px 2px 4px goldenrod;
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

    &:hover{
        background-color: goldenrod;
        color: black;
    }
`
