import styled from 'styled-components'


export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
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
    left: 37%;
    color: rgba(255, 255, 255, 0.5)
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

