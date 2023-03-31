import styled from 'styled-components'


export const Head = styled.div`
  background-image: linear-gradient(#151626, lightblue);  
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

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

  .search-icon{
    position: absolute;
    top: 40%;
    left: 39.5%;
    color: rgba(255, 255, 255, 0.5)
  }
`
export const Search = styled.input`
  width: 200px;
  height: 30px;
  background: transparent;
  color: whitesmoke;
  font-size: 1rem;
  border-radius: 20px;
  margin: 10px;
  padding-left: 30px  
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

