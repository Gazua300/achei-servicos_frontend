import styled from 'styled-components'


export const Head = styled.div`
  background-image: linear-gradient(#151626, lightblue);  
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  button {
    border-radius: 15px;
    cursor: pointer;
    background-color: #151626;
    color: whitesmoke;
    padding: 10px;
  }

  @media(max-width: 600px){
    font-size: 20px;
    padding: 10px;
    button {
        padding: 7px;
    }
  }
`

export const Container = styled.div`
    text-align: center;
    padding-top: 10vh;
    margin: 0;

    button {
        background-color: #151626;
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
    background-image: linear-gradient(#151626, lightblue);
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
