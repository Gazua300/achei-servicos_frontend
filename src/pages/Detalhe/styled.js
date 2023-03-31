import styled from 'styled-components'


export const Head = styled.div`
  background-image: linear-gradient(#151626, lightblue);  
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  button {
    border-radius: 15px;
    cursor: pointer;
    background-color: #151626;
    color: whitesmoke;
    padding: 10px;
  }

  @media(max-width: 600px){
    font-size: 20px;
    button {
      padding: 7px;
    }
  }
`
export const Container = styled.div`
    text-align: center;
    padding-top: 5vh;

    .select-image{
      background-image: linear-gradient(#151626, lightblue);
      padding: 10px;
      border-radius: 20px;
    }
`
export const CartaoContainer = styled.div`
    align-items: center;
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    img{
      width: 200px;
      border-radius: 10px;
      &:hover{
        border: 2px solid;
      }
    }

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
    width: 25%;
    display: inline-block;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    box-shadow: 2px 2px 4px #918bcb; 
    margin: 20px;
    padding: 15px;
    border-radius: 10px; 

    .card-content {
        text-align: left;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: whitesmoke;
        background-color: #151626;
        padding: 7px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px black;
    }

    input[type='file']{
      text-decoration: none;
        color: whitesmoke;
        background-color: #151626;
        padding: 7px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px black;
    }

    @media(max-width: 600px){
        width: 70%;
    }
`
export const Nome = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`
