import styled from 'styled-components'


export const Container = styled.div`
  text-align: center;
  padding-top: 5vh;
  
  .title{
    font-size: 25px;
    margin-top: 15vh;

    @media(max-width: 600px){
      font-size: 18px;
    }
  }
`
export const Search = styled.input`
  width: 250px;
  height: 30px;
  background: transparent;
  color: whitesmoke;
  font-size: 1rem;
  border-radius: 20px;
  margin: 10px;
  padding-left: 15px  
`
export const Cartao = styled.div`
  border: 1px solid whitesmoke;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
`

