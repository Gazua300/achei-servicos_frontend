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
    &:hover{
    transform: scale(1.1);
    transition: 1s;
    }

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
